import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './examp/cat.module';
import { LoggerMiddleware } from './examp/logger.middleware';
import { DbModule } from './modules/db/db.module';
// import { CatController } from './examp/cats.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, DbModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
    // consumer.apply(LoggerMiddleware).forRoutes({
    //   path: 'cats',
    //   method: RequestMethod.GET,
    // });
  }
}
