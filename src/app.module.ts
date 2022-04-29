import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { MugModule } from './mug/mug.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

// let envFilePath = '../.env.development'

// if (process.env.MODE === 'PROD') {
//   envFilePath = '../.env.production'
// }

@Module({
  imports: [
    ConfigModule.forRoot(
      // { envFilePath }
    ),
    PassportModule.register({ session: true }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    MugModule,
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
