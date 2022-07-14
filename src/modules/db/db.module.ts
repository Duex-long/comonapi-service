import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';

@Module({
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {
  constructor(private readonly dbService: DbService) {
    console.log(dbService);
  }
}
