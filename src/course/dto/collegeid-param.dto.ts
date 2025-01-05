import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

export class CollegeIdParamDto {
  @ApiProperty({ description: 'Unique identifier of the college', example: 1 })
  @IsInt()
  @Min(1)
  college_id: number;
}
