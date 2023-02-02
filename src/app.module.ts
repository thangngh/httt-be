import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PositionModule } from './position/position.module';
import { MonthModule } from './month/month.module';
import { SalaryUserModule } from './salary-user/salary-user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
    PositionModule,
    MonthModule,
    SalaryUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
