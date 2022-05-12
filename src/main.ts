import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
import * as passport from 'passport'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });
  app.use(
    session({
      cookie: {
        maxAge: 86400000
      },
      secret: 'asdasdasdasdasdasdlfaskfn2l31kn4',
      resave: false,
      saveUninitialized: false,
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  const config = new DocumentBuilder()
    .setTitle('The Mugs Center')
    .setDescription('Find your favorite mug, and where to buy it.')
    .setVersion('1.0')
    .addTag('mugs')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000, () => {
    console.log('Api running...')
  });
}
bootstrap();
