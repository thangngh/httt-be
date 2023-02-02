import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { SalaryUser } from 'src/salary-user/entities/salary-user.entity';
import { Position } from 'src/position/entities/position.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  isactive: boolean;

  @Column()
  avatar: string;

  @Column()
  positionId: number;

  @OneToOne((type) => Position, (position) => position.user)
  @JoinColumn({
    name: 'positionId',
  })
  position!: Position;

  @OneToMany(() => SalaryUser, (salaryUser) => salaryUser.user)
  salaryUser!: SalaryUser[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
  }

  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }
}
