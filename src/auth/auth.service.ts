import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

type AuthInput = { username: string; password: string, college: string };
type SignInData = { id: number; username: string };
type AuthResult = {accessToken: string; userId: number; username: string};

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async authenticate(input: AuthInput): Promise<AuthResult> {
    const college = await this.prisma.college.findFirst({
      where: {
        name: input.college,
      },
    }); 

    const user = await this.prisma.users.create({
      data: {
        username: input.username,
        password: input.password,
        college_id: college.id,
      },
    })
    console.log(user);

    return this.signIn(user);
  }

  async signIn(user: SignInData): Promise<AuthResult> {
    const tokenPayload = {
      id: user.id,
      username: user.username, 
    };

    const accessToken = await this.jwtService.signAsync(tokenPayload);

    return {
      accessToken,
      userId: user.id,
      username: user.username,
    };
  }

  async getUserIn(request: {userId: number, username: string}): Promise<{username: string, college: string}> {
    const user = await this.prisma.users.findFirst({
      where: {
        id: request.userId,
      },
    });
    
    if (!user) {
      throw new UnauthorizedException();
    }

    const college = await this.prisma.college.findFirst({
      where: {
        id: user.college_id,
      },
    });

    return {
      username: user.username,
      college: college.name,
    };
  }
}
