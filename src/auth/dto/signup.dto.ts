import { ApiProperty } from '@nestjs/swagger';

export class SignupDto {
  @ApiProperty({ description: 'The username of the user' })
  username: string;

  @ApiProperty({ description: 'The password of the user' })
  password: string;

  @ApiProperty({ description: 'The name of the college' })
  college: string;
}