import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('login')
  userLogin() {
    return 'token';
  }
  @Get('test')
  userTest() {
    return this.userService.createUser();
  }
  @Post('createUser')
  userCreate() {
    return '111';
  }
}
