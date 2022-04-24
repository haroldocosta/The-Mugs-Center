import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mug } from '../../src/model/mug.entity';
import { MugIdDto } from '../dto/mug-id.dto';
import { MugDto } from '../dto/mug.dto';
import { MugRepository } from '../model/mug.repository';

@Injectable()
export class MugService {

    private logger: Logger = new Logger('MugPersistenceService');

    constructor(
        @InjectRepository(MugRepository)
        private readonly mugRepository: MugRepository,
    ) { }

    async findAll(): Promise<MugIdDto[]> {
        try {
            return await this.mugRepository.find({});
        } catch (err) {
            this.logger.error(err.trace)
            return err;
        }
    }

    async findById(id: string): Promise<Mug> {
        try {
            const found = await this.mugRepository.findOne(id);
            if (!found) {
                throw new Error(`Mug with ID ${id} now found`);
            }
            return found
        } catch (err) {
            this.logger.error(`User try to find Mug by ID ${id} and throw `, err.trace)
            return err;
        }
    }

    async insert(book: MugDto): Promise<Mug> {
        const newBook = new Mug();

        Object.keys(book).forEach((key) => {
            newBook[key] = book[key];
        });

        try {
            return await this.mugRepository.save(newBook);
        } catch (err) {
            this.logger.error(``, err.trace)
            return err;
        }
    }

    async update(oldBook: Mug, updated_values: MugDto): Promise<Mug> {
        const updatedBook = oldBook;

        Object.keys(updated_values).forEach((key) => {
            updatedBook[key] = updated_values[key];
        });

        try {
            return await this.mugRepository.save(updatedBook);
        } catch (err) {
            return err;
        }

    }

    async delete(id: string) {
        try {
            return await this.mugRepository.delete(id);
        } catch (err) {
            return err;
        }
    }

}
