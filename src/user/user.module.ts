import { Module } from '@nestjs/common';
import { DbService } from 'src/modules/db/db.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {
  constructor() {
    console.log('userModule Inject');
  }
}
