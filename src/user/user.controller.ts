import { Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post('login')
  userLogin() {
    return 'token';
  }
}
