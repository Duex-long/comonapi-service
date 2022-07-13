import { Controller } from '@nestjs/common';
import { DbService } from './db.service';

export class DbController {
  constructor(private readonly dbService: DbService) {
    // 连接数据库
  }
}
