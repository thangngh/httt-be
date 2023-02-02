export interface IRegister {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password?: string;
  isactive?: boolean;
  avatar?: string;
  positionId?: number;
  stateId?: number;
}

export interface ILogin {
  username: string;
  password: string;
}
