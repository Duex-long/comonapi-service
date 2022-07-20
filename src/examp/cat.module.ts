import { Module } from '@nestjs/common';
import { CatController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  providers: [CatsService],
  controllers: [CatController],
})
export class CatsModule {}
