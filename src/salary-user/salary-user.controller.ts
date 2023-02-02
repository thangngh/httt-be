import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SalaryUserService } from './salary-user.service';
import { CreateSalaryUserDto } from './dto/create-salary-user.dto';
import { UpdateSalaryUserDto } from './dto/update-salary-user.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('salary')
@Controller('salary-user')
export class SalaryUserController {
  constructor(private readonly salaryUserService: SalaryUserService) { }

  @Post('/create')
  create(@Body() createSalaryUserDto: CreateSalaryUserDto) {
    return this.salaryUserService.create(createSalaryUserDto);
  }

  // @Get()
  // findAll() {
  //   return this.salaryUserService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salaryUserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSalaryUserDto: UpdateSalaryUserDto,
  ) {
    return this.salaryUserService.update(+id, updateSalaryUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salaryUserService.remove(+id);
  }
}
