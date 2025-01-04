import { Controller, Get, Query } from '@nestjs/common';
import { CollegeService } from './college.service';

@Controller('colleges')
export class CollegeController {
  constructor(private readonly collegeService: CollegeService) {}

  @Get()
  async getColleges(
    @Query('city') city?: string,
    @Query('state') state?: string,
  ) {
    return await this.collegeService.getColleges(city, state);
  }
}
