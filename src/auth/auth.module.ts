import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../src/entity';
import { AuthController } from './controller/auth/auth.controller';
import { AuthService } from './service/auth/auth.service';
import { DiscordStrategy } from './strategy';

@Module({
  controllers: [AuthController],
  providers: [
    DiscordStrategy,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService
    }
  ],
  imports: [
    TypeOrmModule.forFeature([User])
  ]
})
export class AuthModule { }
