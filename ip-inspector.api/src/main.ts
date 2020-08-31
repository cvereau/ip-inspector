import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // in a real world api this will have to change so we could have a whitelist of ip/domains
  const corsConfig = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };
  app.enableCors(corsConfig);
  await app.listen(3000);
}
bootstrap();
