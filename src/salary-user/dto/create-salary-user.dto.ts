import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class CreateSalaryUserDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  userId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  positionId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  day: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  salary: number;
}
