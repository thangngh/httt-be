import { IsEmail, IsOptional } from 'class-validator';
import { IRegister } from '../interface/auth.interface';

export class AuthCredentialsDto implements IRegister {
	@IsOptional()
	readonly firstname: string;

	@IsOptional()
	readonly lastname: string;

	@IsOptional()
	@IsEmail()
	readonly email: string;

	@IsOptional()
	readonly username: string;

	@IsOptional()
	readonly password: string;

	@IsOptional()
	readonly isactive?: boolean;

	@IsOptional()
	readonly avatar?: string;
}
