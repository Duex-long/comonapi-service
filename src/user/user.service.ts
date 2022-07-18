import { Injectable } from '@nestjs/common';
import { DbService } from 'src/modules/db/db.service';

@Injectable()
export class UserService {
  constructor(private dbService: DbService) {}
  createUser() {
    return this.dbService.getHello();
  }
}
