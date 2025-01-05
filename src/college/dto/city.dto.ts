import { ApiProperty } from '@nestjs/swagger';

export class CityDto {
  @ApiProperty({ description: 'Unique identifier of the city' })
  id: number;

  @ApiProperty({ description: 'Name of the city' })
  name: string;
}
