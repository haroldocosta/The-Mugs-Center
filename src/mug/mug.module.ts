import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MugService } from './mug.service';
import { MugController } from './mug.controller';
import { MugRepository } from './mug.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MugRepository])],
  controllers: [MugController],
  providers: [MugService],
  exports: []
})
export class MugModule { }