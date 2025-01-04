import { Controller, Get, Param, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { CollegeDataService } from './college_data.service';

@Controller('college_data')
export class CollegeDataController {
  constructor(private readonly collegeService: CollegeDataService) {}

  @Get(':college_id')
  async getCollegeData(@Param('college_id', ParseIntPipe) college_id: number) {
    const collegeData = await this.collegeService.getCollegeData(college_id);

    if (!collegeData) {
      throw new NotFoundException(`College with ID ${college_id} not found.`);
    }

    return collegeData;
  }
}