import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';  // Assuming PrismaService is correctly set up

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  // Fetch courses by college_id, sorted by course_fee in descending order
  async getCoursesByCollegeId(college_id: number) {
    const courses = await this.prisma.college_Wise_Course.findMany({
      where: { college_id: college_id },
      orderBy: {
        course_fee: 'desc', // Sorting courses by course_fee in descending order
      },
    });

    return courses;  // You can apply further transformations or filters here if needed
  }
}
