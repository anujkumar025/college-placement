import { ApiProperty } from '@nestjs/swagger';

export class DeleteCourseDto {
  @ApiProperty({ description: 'Name of the college' })
  collegeName: string;

  @ApiProperty({ description: 'Name of the course' })
  courseName: string;
}
