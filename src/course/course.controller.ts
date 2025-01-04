import { Controller, Get, Param, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { CourseService } from './course.service';  // Separate course service

@Controller('college_courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  // Endpoint to get all courses for a specific college_id
  @Get(':college_id')
  async getCollegeCourses(@Param('college_id', ParseIntPipe) college_id: number) {
    const courses = await this.courseService.getCoursesByCollegeId(college_id);

    if (!courses || courses.length === 0) {
      throw new NotFoundException(`No courses found for college with ID ${college_id}`);
    }

    return courses;
  }
}
