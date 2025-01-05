import { ApiProperty } from "@nestjs/swagger";

export class PlacementDto {
    @ApiProperty({description: 'Unique identifier'})
    id: number;

    @ApiProperty({description: 'id of college'})
    college_id: number;

    @ApiProperty({description: 'year of data provided'})
    year: number;

    @ApiProperty({description: 'highest placement'})
    highest_placement: number;

    @ApiProperty({description: 'average of placement'})
    average_placement: number;

    @ApiProperty({description: 'median of placement'})
    median_placement: number;

    @ApiProperty({description: 'rate of placement (number of students placed/total students)'})
    placement_rate: number;

    @ApiProperty({description: 'UP if placement is increased, DOWN if placement is decreased in last 2 years'})
    placement_trend: string;  // This will be 'UP' or 'DOWN'
  }
  