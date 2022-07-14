import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';

@Global()
@Module({
  exports: [DbService],
})
export class DbModule { }
