import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mug } from '../../src/model/mug.entity';
import { MugRepository } from '../model/mug.repository';
import { MugController } from './mug.controller';
import { MugService } from './mug.service';

const mockMugRepository = () => ({
  getMugs: jest.fn(),
})

describe('MugController', () => {
  let mugController: MugController;
  let mugService: MugService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [MugController],
      providers: [
        MugService,
        { provide: MugRepository, useFactory: mockMugRepository },
      ],
    }).compile();

    mugService = module.get<MugService>(MugService);
    mugController = module.get<MugController>(MugController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const mug: Mug = {
        id: 'teste',
        description: 'teste',
        buy_url: 'teste',
        img_url: 'teste',
        mainColor: 'teste',
        isActive: true,
        createDateTime: new Date(),
        name: 'teste',
        theme: 'teste',
      } as Mug;
      const result = Promise.resolve([mug]);

      jest.spyOn(mugService, 'findAll').mockImplementation(() => result);

      expect(await mugController.findAll()).toStrictEqual([mug]);
    });
  });
});