import { Global, Module } from '@nestjs/common';
import { Sequelize } from 'sequelize/types';
import initDB from 'src/utils/initDB';
import { DbController } from './db.controller';
import { DbService } from './db.service';

@Global()
@Module({
  controllers: [DbController],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {
  db?: Sequelize;
  async injectDb() {
    this.db = await initDB();
  }
  constructor() {
    if (!this.db) {
      initDB();
    }
  }
}
