import { ApiProperty } from '@nestjs/swagger';

export class UpdateCourseDto {
  @ApiProperty({ description: 'Name of the college' })
  collegeName: string;

  @ApiProperty({ description: 'Name of the course' })
  courseName: string;

  @ApiProperty({ description: 'Updated duration of the course in years' })
  courseDuration: number;

  @ApiProperty({ description: 'Updated fee for the course' })
  courseFee: number;
}
