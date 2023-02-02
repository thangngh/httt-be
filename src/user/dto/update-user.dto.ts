import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateUserDto {
	@ApiProperty()
	firstname: string;
	@ApiProperty()
	lastname: string;
	@ApiProperty()
	email: string;
	@ApiProperty()
	username: string;
	@ApiProperty()
	isactive?: boolean;
	@ApiProperty()
	avatar?: string;
	@ApiProperty()
	positionId?: number;
	@ApiProperty()
	stateId: number
}
