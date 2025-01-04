import { Controller, Get } from '@nestjs/common';

@Controller() // No prefix for root URL
export class RootController {
  @Get()
  getRoot(): string {
    return 'Welcome to the Sports API!!!!!!!!!!!!!!!!!!!!!!';
  }
}
