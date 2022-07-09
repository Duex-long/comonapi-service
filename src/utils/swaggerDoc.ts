import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const createDoc = (app: INestApplication) => {
  const swaggerOptions = new DocumentBuilder()
    .setTitle('nestjs-api-文档')
    .setDescription('nestjs-api-说明')
    .setVersion('1.0')
    .addBasicAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('doc', app, document);
};

export { createDoc };
