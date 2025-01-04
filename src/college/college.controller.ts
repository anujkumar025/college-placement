import { Controller, Get, Param, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { CollegeService } from './college.service';
import { AvgPlacementDto } from './dto/avg-placement.dto';

@Controller('college_data')
export class CollegeController {
  constructor(private readonly collegeService: CollegeService) {}

  @Get(':college_id')
  async getCollegeData(
    @Param('college_id', ParseIntPipe) collegeId: number,
  ): Promise<AvgPlacementDto[]> {
    // Verify if the college exists
    const college = await this.collegeService.getCollegeById(collegeId);
    console.log("reached here45");
    if (!college) {
      throw new NotFoundException(`College with ID ${collegeId} not found.`);
    }

    // Fetch and return the average placement data
    return this.collegeService.getAveragePlacementByYear(collegeId);
  }
}

