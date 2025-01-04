import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup') 
  async login(@Body() input: {username: string; password: string}) {
    return this.authService.authenticate(input);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getUserInfo(@Request() request) {
    return request.user;
  }
}
