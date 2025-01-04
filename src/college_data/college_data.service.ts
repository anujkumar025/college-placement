import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';

@Injectable()
export class CollegeDataService {
  constructor(private prisma: PrismaService) {}

  // Get the average placement by year
  async getCollegeData(college_id: number) {
    // 1. Fetch avg_section (average placement data by year)
    const avgSection = await this.prisma.college_Placement.groupBy({
      by: ['year'],
      where: {
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
      orderBy: { year: 'asc' },
    });

    // Transform avgSection to match the format
    const avgSectionFormatted = avgSection.map((item) => ({
      year: item.year,
      highest_placement: item._avg.highest_placement,
      average_placement: item._avg.average_placement,
      median_placement: item._avg.median_placement,
      placement_rate: item._avg.placement_rate,
    }));

    // 2. Fetch placement_section (all placement data for the college)
    const placementSection = await this.prisma.college_Placement.findMany({
      where: {
        college_id: college_id,
        highest_placement: { not: 0 },
        average_placement: { not: 0 },
        median_placement: { not: 0 },
        placement_rate: { not: 0 },
      },
      orderBy: { year: 'asc' },
    });

    // Calculate placement_trend (compare placement_rate between consecutive years)
    const placementSectionWithTrend = placementSection.map((item, index, arr) => {
      let placementTrend = '';
      if (index > 0) {
        const prevYear = arr[index - 1];
        if (item.placement_rate > prevYear.placement_rate) {
          placementTrend = 'UP';
        } else if (item.placement_rate < prevYear.placement_rate) {
          placementTrend = 'DOWN';
        }
      }
      return {
        ...item,
        placement_trend: placementTrend,
      };
    });

    return {
      placement_section: placementSectionWithTrend,
      avg_section: avgSectionFormatted,
    };
  }
}
