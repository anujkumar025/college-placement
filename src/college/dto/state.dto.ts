import { ApiProperty } from '@nestjs/swagger';

export class StateDto {
  @ApiProperty({ description: 'Unique identifier of the state' })
  id: number;

  @ApiProperty({ description: 'Name of the state' })
  name: string;
}
