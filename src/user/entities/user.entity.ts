import { BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

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
		default: true
	})
	isactive: boolean;

	@Column()
	avatar: string

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
