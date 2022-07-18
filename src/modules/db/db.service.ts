import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize/types';
import initDB from 'src/utils/initDB';

@Injectable()
export class DbService {
  getHello(): string {
    return 'Hello World!';
  }
}
