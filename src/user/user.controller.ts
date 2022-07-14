import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post('login')
  userLogin() {
    return 'token';
  }
  @Get('test')
  userTest() {
    return 'test';
  }
  @Post('createUser')
  userCreate() {
    return '111';
  }
}
