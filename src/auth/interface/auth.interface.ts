export interface IRegister {
	firstname: string;
	lastname: string;
	email: string;
	username: string;
	password?: string;
	isactive?: boolean;
	avatar?: string;
}

export interface ILogin {
	username: string;
	password: string;
}