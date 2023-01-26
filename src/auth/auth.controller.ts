import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

import { UsersAuthDto } from './dto/users-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body(new ValidationPipe()) body: UsersAuthDto) {
    return await this.authService.login(body);
  }

  @Post('register')
  async register(@Body(new ValidationPipe()) body: AuthCredentialsDto) {
    return await this.authService.register(body);
  }
}
