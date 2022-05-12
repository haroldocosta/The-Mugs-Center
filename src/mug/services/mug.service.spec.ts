import { Test, TestingModule } from '@nestjs/testing';
import { MugModule } from '../mug.module';
import { MugRepository } from '../mug.repository';
import { MugService } from './mug.service';

const mockMugRepository = () => ({})

const mockMug = {
  id: "3f506a33-f6cc-4889-b691-5d4f6c9cc721",
  isActive: true,
  isArchived: true,
  createDateTime: "2022-05-10T23:35:12.287Z",
  createdBy: "Haroldo Costa",
  lastChangedDateTime: "2022-05-10T23:35:12.287Z",
  lastChangedBy: "Haroldo Costa",
  internalComment: null,
  name: "Copinho",
  description: "Copinho"
}

describe('MugService', () => {
  let mugService: MugService;
  let mugRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MugService,
        { provide: MugRepository, useFactory: mockMugRepository }
      ],
      imports:[]
    }).compile();

    mugService = module.get<MugService>(MugService);
    mugRepository = module.get<MugRepository>(MugRepository);
  });

  it('should be defined', () => {
    expect(mugService).toBeDefined();
  });
});
