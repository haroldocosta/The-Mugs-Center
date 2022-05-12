import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../user/services/user/user.service';
import { User } from '../../src/entity';
import { AuthController } from './controller/auth/auth.controller';
import { AuthService } from './service/auth/auth.service';
import { DiscordStrategy } from './strategy';
import { SessionSerializer } from './utils/Serializer';
import { UserModule } from '../../src/user/user.module';

@Module({
  controllers: [AuthController],
  providers: [
    DiscordStrategy,
    SessionSerializer,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService
    },
  ],
  exports: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService
    },
  ],
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule,
  ]
})
export class AuthModule { }
