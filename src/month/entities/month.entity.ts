import { SalaryUser } from 'src/salary-user/entities/salary-user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Month {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => SalaryUser, (salaryUser) => salaryUser.month)
  salaryUser!: SalaryUser[];
}
