import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MugPersistenceModule } from './mug-persistence.module';

const logger = new Logger('Microservice');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MugPersistenceModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3001
      }
    },
  );
  
  await app.listen().then(
    () => {
      logger.log('Microservice is listening');
    }
  );
}
bootstrap();
