import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
import * as passport from 'passport'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
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
  await app.listen(3000, () => {
    console.log('Api running...')
  });
}
bootstrap();
