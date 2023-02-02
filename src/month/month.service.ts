import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalaryUser } from 'src/salary-user/entities/salary-user.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateMonthDto } from './dto/create-month.dto';
import { UpdateMonthDto } from './dto/update-month.dto';
import { Month } from './entities/month.entity';

@Injectable()
export class MonthService {
  constructor(
    @InjectRepository(Month)
    private readonly monthRepository: Repository<Month>,
    @InjectRepository(SalaryUser)
    private readonly salaryUserRepository: Repository<SalaryUser>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }
  async findAll() {
    return await this.monthRepository.find();
  }

  async findAllSalary() {
    const users = await this.userRepository.find()
    const salaryUsers = await this.salaryUserRepository.find({
      relations: ['month']
    });
    const data = [];
    users.forEach((user) => {
      const salarys = salaryUsers
        .filter(
          (salaryUser) =>
            salaryUser.userId === user.id,
        )
        .map((salaryUser) => {
          return {
            monthId: salaryUser.monthId,
            monthName: salaryUser.month.name,
            day: salaryUser.day,
            salary: salaryUser.salaryMoney
          }
        });
      data.push({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        isActive: user.isactive,
        salarys: salarys.length > 0 ? salarys : [],
      });
    })
    return await data;
  }

  findOne(id: number) {
    return `This action returns a #${id} month`;
  }

  async filterMonth(id: number) {
    const month = await this.monthRepository.find({
      where: { id },
      relations: {
        salaryUser: {
          user: true,
          month: true
        }
      }
    })
    const data = month.map((item) => ({
      id: item.id,
      month: item.name,
      user: item.salaryUser.map((item) => ({
        employee: `${item.user?.firstname} ${item.user?.lastname}`,
        salary: item.salaryMoney
      }))
    }))

    if (!data || data.length === 0) throw new HttpException("Data not found", HttpStatus.NOT_FOUND)
    return data;
  }

}
