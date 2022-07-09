import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createDoc } from './utils/swaggerDoc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  createDoc(app);
  await app.listen(3000);
}
bootstrap();
