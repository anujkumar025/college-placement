import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { AvgPlacementDto } from './dto/avg-placement.dto';

@Injectable()
export class CollegeService {
  constructor(private prisma: PrismaService) {}

  // Method to check if a college exists
  async getCollegeById(collegeId: number) {
    return this.prisma.college.findUnique({
      where: { id: collegeId },
    });
  }

  // Method to fetch and calculate average placement data grouped by year
  async getAveragePlacementByYear(collegeId: number): Promise<AvgPlacementDto[]> {
    const placements = await this.prisma.college_Placement.groupBy({
      by: ['year'],
      where: {
        college_id: collegeId,
        // Exclude rows where any placement field is null or 0
        highest_placement: { not: 0 },
        average_placement: { not: 0 },
        median_placement: { not: 0 },
        placement_rate: { not: 0 },
      },
      _avg: {
        highest_placement: true,
        average_placement: true,
        median_placement: true,
        placement_rate: true,
      },
      orderBy: {
        year: 'asc',
      },
    });

    // Transform the result to match AvgPlacementDto
    return placements.map((placement) => ({
      year: placement.year,
      average_highest_placement: Math.round(placement._avg.highest_placement),
      average_average_placement: Math.round(placement._avg.average_placement),
      average_median_placement: Math.round(placement._avg.median_placement),
      average_placement_rate: Math.round(placement._avg.placement_rate),
    }));
  }
}
