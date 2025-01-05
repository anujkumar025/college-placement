import { Controller, Get, Param, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { CourseService } from './course.service';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { CourseDto } from './dto/course.dto';

@Controller('college_courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @ApiOperation({ summary: 'Get all courses for a specific college' })
  @ApiOkResponse({
    description: 'List of courses for a specific college',
    type: [CourseDto], 
  })
  @Get(':college_id')
  async getCollegeCourses(@Param('college_id', ParseIntPipe) college_id: number): Promise<CourseDto[]> {
    const courses = await this.courseService.getCoursesByCollegeId(college_id);

    if (!courses || courses.length === 0) {
      throw new NotFoundException(`No courses found for college with ID ${college_id}`);
    }

    return courses.map(course => ({
      id: course.id,
      collegeId: course.college_id,
      courseName: course.course_name,
      courseDuration: course.course_duration,
      courseFee: course.course_fee,
    }));
  }
}
