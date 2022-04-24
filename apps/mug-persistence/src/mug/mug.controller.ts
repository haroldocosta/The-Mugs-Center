import { Controller, Param } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MugIdDto } from '../dto/mug-id.dto';
import { MugDto } from '../dto/mug.dto';
import { MugService } from './mug.service';

@Controller('mug')
export class MugController {

    constructor(private readonly mugPersistenceService: MugService) { }

    @MessagePattern({ role: 'mug', cmd: 'find' })
    async findAll(): Promise<MugIdDto[]> {
        return await this.mugPersistenceService.findAll() as MugIdDto[];
    }

    @MessagePattern({ role: 'mug', cmd: 'findOne' })
    async findOneById(@Param('id') id: string): Promise<MugIdDto> {
        return await this.mugPersistenceService.findById(id);
    }

    @MessagePattern({ role: 'mug', cmd: 'create' })
    async create(mug: MugDto) {
        return await this.mugPersistenceService.insert(mug);
    }

    @MessagePattern({ role: 'mug', cmd: 'update' })
    async update(updatedMug: MugDto, id: string): Promise<MugIdDto> {
        const oldMug = await this.mugPersistenceService.findById(id);
        return await this.mugPersistenceService.update(oldMug, updatedMug);
    }

    @MessagePattern({ role: 'mug', cmd: 'delete' })
    async delete(params) {
        return await this.mugPersistenceService.delete(params.id);
    }

}
