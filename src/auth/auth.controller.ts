import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'sign up by username, password and college name' })
  @Post('signup') 
  async signup(@Body() input: {username: string; password: string, college: string}) {
    return this.authService.authenticate(input);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'get information about user using jwt key' })
  @UseGuards(AuthGuard)
  @Get('me')
  async getUserInfo(@Request() request) {
    return this.authService.getUserIn(request);
  }
}
