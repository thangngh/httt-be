import { Month } from 'src/month/entities/month.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class SalaryUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  monthId: number;

  @Column()
  day: number;

  @Column()
  salaryMoney: string;

  @ManyToOne((type) => User, (user) => user.salaryUser)
  @JoinColumn({ name: 'userId' })
  user!: User;

  @ManyToOne((type) => Month, (month) => month.salaryUser)
  @JoinColumn({ name: 'monthId' })
  month!: Month;
}
