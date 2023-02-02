import { Module } from '@nestjs/common';
import { SalaryUserService } from './salary-user.service';
import { SalaryUserController } from './salary-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaryUser } from './entities/salary-user.entity';
import { User } from 'src/user/entities/user.entity';
import { Month } from 'src/month/entities/month.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalaryUser, User, Month])],
  controllers: [SalaryUserController],
  providers: [SalaryUserService],
})
export class SalaryUserModule {}
