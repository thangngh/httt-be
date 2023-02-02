import { Module } from '@nestjs/common';
import { MonthService } from './month.service';
import { MonthController } from './month.controller';
import { Month } from './entities/month.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Month])],
  controllers: [MonthController],
  providers: [MonthService],
})
export class MonthModule {}
