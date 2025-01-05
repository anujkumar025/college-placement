import { ApiProperty } from '@nestjs/swagger';

export class CourseDto {
  @ApiProperty({ description: 'Unique identifier for the course' })
  id: number;

  @ApiProperty({ description: 'Name of the course' })
  courseName: string;

  @ApiProperty({ description: 'Duration of the course in years' })
  courseDuration: number;

  @ApiProperty({ description: 'Fee for the course' })
  courseFee: number;

  @ApiProperty({ description: 'College ID associated with this course' })
  collegeId: number;
}
