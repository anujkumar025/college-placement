import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor (private jwtService: JwtService, private prisma: PrismaService) {}
    

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const authorization = request.headers.authorization;  //Bearer token
        const token = authorization?.split(' ')[1];

        if (!token) {
            throw new UnauthorizedException();
        }

        try {
            const tokenPayload = await this.jwtService.verifyAsync(token);

            request.user = {
                userId: tokenPayload.id,
                username: tokenPayload.username,
            }
            return true;
        }
        catch (e) {
            throw new UnauthorizedException();
        }
    }
}