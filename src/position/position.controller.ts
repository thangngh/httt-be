import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PositionService } from './position.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('position')
@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post('/create')
  create(@Body() createPositionDto: CreatePositionDto) {
    return this.positionService.create(createPositionDto);
  }

  @Get('/get-all')
  findAll() {
    return this.positionService.findAll();
  }

  @Get('/get-one/:id')
  findOne(@Param('id') id: string) {
    return this.positionService.findOne(+id);
  }

  @Patch('/update:id')
  update(
    @Param('id') id: string,
    @Body() updatePositionDto: UpdatePositionDto,
  ) {
    return this.positionService.update(+id, updatePositionDto);
  }
}
