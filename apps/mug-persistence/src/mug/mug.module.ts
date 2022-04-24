import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MugRepository } from '../model/mug.repository';
import { MugController } from './mug.controller';
import { MugService } from './mug.service';

@Module({
  imports: [TypeOrmModule.forFeature([MugRepository]),],
  providers: [MugService],
  controllers: [MugController],
  exports: []
})
export class MugModule { }