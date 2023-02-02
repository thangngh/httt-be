import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMonthDto } from './dto/create-month.dto';
import { UpdateMonthDto } from './dto/update-month.dto';
import { Month } from './entities/month.entity';

@Injectable()
export class MonthService {
  constructor(
    @InjectRepository(Month)
    private readonly monthRepository: Repository<Month>,
  ) {}
  async findAll() {
    console.log(123);
    return await this.monthRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} month`;
  }
}
