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
  monthId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  day: number;
}
