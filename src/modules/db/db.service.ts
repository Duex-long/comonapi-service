import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize/types';
import initDB from 'src/utils/initDB';

@Injectable()
export class DbService {
  db?: Sequelize;
  constructor() {
    this.injectDb();
  }
  async injectDb() {
    this.db = await initDB();
  }
  getHello(): string {
    return 'Hello World!';
  }
}
