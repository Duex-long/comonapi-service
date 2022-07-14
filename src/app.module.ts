import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './examp/cats.controller';
import { DbModule } from './modules/db/db.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, DbModule],
  controllers: [AppController, CatController],
  providers: [AppService],
})
export class AppModule {}
