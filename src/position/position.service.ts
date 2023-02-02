import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { Position } from './entities/position.entity';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position)
    private readonly positionRepository: Repository<Position>,
  ) {}
  async create(createPositionDto: CreatePositionDto) {
    const { name, salary } = createPositionDto;
    const findPosition = await this.positionRepository.findOne({
      where: { name: name },
    });
    if (findPosition) {
      throw new HttpException(
        'Position already exists! You not create position',
        HttpStatus.CONFLICT,
      );
    } else {
      const position = await this.positionRepository.create({
        name,
        salary,
      });
      await this.positionRepository.save(position);
      return {
        status: HttpStatus.OK,
        message: `Create ${name} successfully !`,
      };
    }
  }

  async findAll() {
    return await this.positionRepository.find();
  }

  async findOne(id: number) {
    return await this.positionRepository.find({
      where: { id: id },
    });
  }

  async update(id: number, updatePositionDto: UpdatePositionDto) {
    const { name, salary } = updatePositionDto;
    const findPosition = await this.positionRepository
      .createQueryBuilder('position')
      .where('name = :name', {
        name: name,
      })
      .andWhere('position.id != :id ', {
        id: id,
      })
      .getMany();

    if (findPosition.length > 0) {
      throw new HttpException(
        'Position already exists! You not update position',
        HttpStatus.CONFLICT,
      );
    } else {
      await this.positionRepository
        .createQueryBuilder('position')
        .update(Position)
        .set({ name: name, salary: salary })
        .where('id = :id', { id: id })
        .execute();

      const positionUpdated = await this.positionRepository.findOne({
        where: { id },
      });
      return {
        status: HttpStatus.OK,
        message: `position ${positionUpdated} updated successfully`,
      };
    }
  }

  remove(id: number) {
    return `This action removes a #${id} position`;
  }
}
