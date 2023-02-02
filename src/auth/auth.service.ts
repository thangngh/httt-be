import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { ILogin, IRegister } from './interface/auth.interface';
import { JwtPayload } from './interface/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) { }

  async login(body: ILogin) {
    const { username, password } = body;
    const user = await this.userRepository.findOne({
      where: {
        username,
      },
    });

    const isMatch = await user?.validatePassword(password as string);

    if (!isMatch || !user) {
      throw new HttpException('Wrong username or password', 401);
    }

    const payload = { id: user.id, username: user.username };

    return {
      statusCode: HttpStatus.OK,
      message: 'Login successfully',
      accessToken: this.jwtService.sign(payload),
    };
  }

  async register(payload: IRegister) {
    const userDB = await this.userRepository
      .createQueryBuilder('user')
      .where('user.username = :username', { username: payload.username })
      .orWhere('user.email = :email', { email: payload.email })
      .getOne();

    if (userDB?.username === payload.username) {
      throw new HttpException(
        `Username ${payload.username}  already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }

    if (userDB?.email === payload.email) {
      throw new HttpException(
        `Email ${payload.email}  already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const passwordLength = payload.password?.length;

    if (passwordLength <= 8 && payload.password) {
      throw new UnauthorizedException(
        `Password must contain at least 8 characters`,
      );
    }

    if (
      !!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g.test(
        payload.password,
      ) === false &&
      payload.password
    ) {
      throw new UnauthorizedException(
        `Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character`,
      );
    }
    const passwordExits = payload.password
      ? payload.password
      : 'unknown password';
    const userDto = new User({
      firstname: payload.firstname,
      lastname: payload.lastname,
      email: payload.email,
      username: payload.username,
      password: passwordExits,
      avatar: payload.avatar,
      isactive: payload.isactive,
      positionId: payload.positionId,
      stateId: payload.stateId
    });

    await this.userRepository
      .createQueryBuilder('user')
      .insert()
      .into(User)
      .values(userDto)
      .execute();

    return {
      status: HttpStatus.CREATED,
      content: 'Create user successful',
    };
  }

  async verifyPayload(payload: JwtPayload): Promise<User> {
    try {
      const builder = await this.userRepository
        .createQueryBuilder('user')
        .where('user.id = :id', { id: payload.id })
        .getOne();

      return builder;
    } catch (error) {
      throw new UnauthorizedException(`
				Unauthorized access with payload: ${JSON.stringify(payload.username)}
			`);
    }
  }
}
