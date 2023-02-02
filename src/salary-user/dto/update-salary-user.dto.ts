import { PartialType } from '@nestjs/swagger';
import { CreateSalaryUserDto } from './create-salary-user.dto';

export class UpdateSalaryUserDto extends PartialType(CreateSalaryUserDto) {}
