import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Position } from 'src/position/entities/position.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateSalaryUserDto } from './dto/create-salary-user.dto';
import { UpdateSalaryUserDto } from './dto/update-salary-user.dto';
import { SalaryUser } from './entities/salary-user.entity';

@Injectable()
export class SalaryUserService {
  constructor(
    @InjectRepository(SalaryUser)
    private readonly salaryUserRepository: Repository<SalaryUser>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }
  async create(createSalaryUserDto: CreateSalaryUserDto) {
    const { userId, monthId, day } = createSalaryUserDto;
    const salaryUser = await this.salaryUserRepository
      .createQueryBuilder('salary-user')
      .where('salary-user.userId = :userId', {
        userId: userId,
      })
      .andWhere('salary-user.monthId != :monthId', {
        monthId: monthId,
      })
      .getMany();

    if (salaryUser.length > 0) {
      throw new HttpException(`Salary User month ${monthId}  already exists`, HttpStatus.BAD_REQUEST);
    }
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['position']
    })
    const salary = (+user.position.salary) / 30 * day;
    const salaryNew = await this.salaryUserRepository.create({
      userId,
      monthId,
      day,
      salaryMoney: salary.toString()
    });
    await this.salaryUserRepository.save(salaryNew);
    return {
      status: HttpStatus.OK,
      message: `Create successfully !`,
    };
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
