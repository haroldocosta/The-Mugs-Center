import { Test } from '@nestjs/testing';
import { MugController } from './mug.controller';
import { MugService } from './mug.service';
import { MugRepository } from '../model/mug.repository';

const mockMugRepository = () => ({
  getMugs: jest.fn(),
})

describe('MugService', () => {
  let service: MugService;
  let repository: MugRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [MugController],
      providers: [
        MugService,
        { provide: MugRepository, useFactory: mockMugRepository },
      ],
    }).compile();

    service = module.get<MugService>(MugService);
    repository = module.get<MugRepository>(MugRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
