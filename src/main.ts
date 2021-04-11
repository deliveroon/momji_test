import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './shared/services/configService';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(
    ConfigService.getAppPort(),
    ConfigService.getAppHost()
  );
}
bootstrap();
