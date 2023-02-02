import { Injectable } from '@nestjs/common';
import { CreateSalaryUserDto } from './dto/create-salary-user.dto';
import { UpdateSalaryUserDto } from './dto/update-salary-user.dto';

@Injectable()
export class SalaryUserService {
  async create(createSalaryUserDto: CreateSalaryUserDto) {
    const { userId, positionId, day, salary } = createSalaryUserDto;
  }

  findAll() {
    return `This action returns all salaryUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salaryUser`;
  }

  update(id: number, updateSalaryUserDto: UpdateSalaryUserDto) {
    return `This action updates a #${id} salaryUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} salaryUser`;
  }
}
