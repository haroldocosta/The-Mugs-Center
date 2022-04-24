import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, UpdateResult } from 'typeorm';
import { MugDto } from '../../src/model/mug-dto.interface';
import { MugIdDto } from '../../src/model/mug-id-dto.interface';
import { MugRepository } from './mug.repository';

@Injectable()
export class MugService {
  constructor(
    @InjectRepository(MugRepository)
    private readonly mugRepository: MugRepository,
  ) { }

  public async create(mug: MugDto): Promise<MugIdDto> {
    return this.mugRepository.save(mug)
  }
  
  public async findAll(): Promise<Array<MugIdDto>> {
    return await this.mugRepository.find();
  }

  public async findOne(id: string): Promise<MugIdDto> {
    const found = await this.mugRepository.findOne(id)
    if (!found) {
      throw new NotFoundException(`Mug with ID ${id} not found`);
    }
    return found
  }

  public async update(id: string, mug: MugIdDto): Promise<UpdateResult> {
    return await this.mugRepository.update(id, mug);
  }
  
  public async remove(id: string): Promise<DeleteResult> {
    return await this.mugRepository.delete(id);
  }
  
}