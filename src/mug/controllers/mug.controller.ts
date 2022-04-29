import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { MugDto } from '../../model/mug-dto.interface';
import { MugIdDto } from '../../model/mug-id-dto.interface';
import { MugService } from '../services/mug.service';

@Controller('mug')
export class MugController {
  constructor(private mugService: MugService) { }

  @Post()
  public async create(@Body() mug: MugDto): Promise<MugIdDto> {
    return await this.mugService.create(mug);
  }

  @Get()
  public async findAll(): Promise<Array<MugIdDto>> {
    return await this.mugService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<MugIdDto> {
    return await this.mugService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMugDto: MugIdDto) {
    return this.mugService.update(id, updateMugDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mugService.remove(id);
  }
}