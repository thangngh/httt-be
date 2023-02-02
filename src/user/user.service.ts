import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { emit } from 'process';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    return await this.userRepository.find({
      relations: ['position'],
      select: {
        id: true,
        username: true,
        firstname: true,
        lastname: true,
        isactive: true,
        avatar: true,
        email: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: { id: id },
      relations: ['position'],
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
