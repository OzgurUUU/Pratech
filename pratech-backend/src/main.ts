import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Frontend ile iletişim için CORS'u etkinleştir
  app.useGlobalPipes(new ValidationPipe()); // Global doğrulama boru hattını etkinleştir
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
