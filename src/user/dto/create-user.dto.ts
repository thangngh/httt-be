import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  firstname: string;
  @ApiProperty()
  lastname: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  password?: string;
  @ApiProperty()
  isactive?: boolean;
  @ApiProperty()
  avatar?: string;
  @ApiProperty()
  positionId?: number;
}
