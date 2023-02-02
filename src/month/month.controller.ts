import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MonthService } from './month.service';
import { CreateMonthDto } from './dto/create-month.dto';
import { UpdateMonthDto } from './dto/update-month.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('month')
@Controller('month')
export class MonthController {
  constructor(private readonly monthService: MonthService) {}

  @Get('/get-all')
  findAll() {
    return this.monthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.monthService.findOne(+id);
  }
}
