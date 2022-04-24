import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MugRepository } from './model/mug.repository';
import { configService } from './config/config.service';
import { MugPersistenceController } from './mug-persistence.controller';
import { MugPersistenceService } from './mug-persistence.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  controllers: [MugPersistenceController],
  providers: [MugPersistenceService],
})

export class MugPersistenceModule { }
