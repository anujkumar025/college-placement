import { ApiProperty } from '@nestjs/swagger';

export class GetCourseDto {
  @ApiProperty({ description: 'Name of the college' })
  collegeName: string;
}
