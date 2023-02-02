import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreatePositionDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  salary: string;
}
