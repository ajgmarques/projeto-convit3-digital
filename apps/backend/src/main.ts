import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ErroFilter from './eventos/erro.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalFilters(new ErroFilter());
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
