import { Controller, Get, Param, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { CollegeDataService } from './college_data.service';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { PlacementDto } from './dto/placement.dto';

@Controller('college_data')
export class CollegeDataController {
  constructor(private readonly collegeService: CollegeDataService) {}

  @ApiOperation({
    summary: 'Get average of all placement fields and all rows of college_placement of a specific college',
  })
  @ApiOkResponse({
    description: 'Placement data retrieved successfully',
    type: [PlacementDto],
  })
  @Get(':college_id')
  async getCollegeData(@Param('college_id', ParseIntPipe) college_id: number): Promise<PlacementDto[]> {
    const collegeData = await this.collegeService.getCollegeData(college_id);

    if (!collegeData || collegeData.placement_section.length === 0) {
      throw new NotFoundException(`No placement data found for college with ID ${college_id}.`);
    }

    return collegeData.placement_section.map(section => ({
      placement_trend: section.placement_trend,
      id: section.id,
      college_id: section.college_id,
      year: section.year,
      highest_placement: section.highest_placement,
      average_placement: section.average_placement,
      median_placement: section.median_placement,
      placement_rate: section.placement_rate,
    }));
  }
}
