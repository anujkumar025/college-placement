import { ApiProperty } from '@nestjs/swagger';
import { CityDto } from './city.dto';  // Assuming you will define CityDto in a separate file
import { StateDto } from './state.dto';  // Assuming you will define StateDto in a separate file

export class CollegeDto {
  @ApiProperty({ description: 'Unique identifier of the college' })
  id: number;

  @ApiProperty({ description: 'Name of the college' })
  name: string;

  @ApiProperty({ description: 'Score of the college' })
  score: number;

  @ApiProperty({ description: 'City of the college', type: CityDto })  // Nested CityDto
  city: CityDto;

  @ApiProperty({ description: 'State of the college', type: StateDto })  // Nested StateDto
  state: StateDto;

  @ApiProperty({ description: 'List of college placements' })
  placements: any[];  // Assuming you'll return relevant placement data or a DTO for CollegePlacement

  @ApiProperty({ description: 'List of courses offered by the college' })
  courses: any[];  // Assuming you'll return relevant course data or a DTO for CollegeWiseCourse

  @ApiProperty({ description: 'List of users associated with the college' })
  users: any[];  // Assuming you'll return relevant user data or a DTO for Users
}
