import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty({ description: 'Name of the college' })
  collegeName: string;

  @ApiProperty({ description: 'Name of the course' })
  courseName: string;

  @ApiProperty({ description: 'Duration of the course in years' })
  courseDuration: number;

  @ApiProperty({ description: 'Fee for the course' })
  courseFee: number;
}
