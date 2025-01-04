import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';

@Injectable()
export class CollegeService {
  constructor(private prisma: PrismaService) {}

  async getColleges(city?: string, state?: string) {
    const filters: any = {};

    if (city) {
      filters.city = {
        name: city, // Assuming `name` is the field in the `Cities` model
      };
    }

    if (state) {
      filters.state = {
        name: state, // Assuming `name` is the field in the `States` model
      };
    }

    return await this.prisma.college.findMany({
      where: filters,
      include: {
        city: true, // Include related city data
        state: true, // Include related state data
      },
    });
  }
}
