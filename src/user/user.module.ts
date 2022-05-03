import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { UserRepository } from './user.repository';

@Module({
  imports: [ TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
  ],
  exports: [
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
  ]
})
export class UserModule { }
