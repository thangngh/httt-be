import { Module } from '@nestjs/common';
import { MonthService } from './month.service';
import { MonthController } from './month.controller';
import { Month } from './entities/month.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaryUser } from 'src/salary-user/entities/salary-user.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Month, SalaryUser, User])],
  controllers: [MonthController],
  providers: [MonthService],
})
export class MonthModule { }
