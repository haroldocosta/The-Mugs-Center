import { Test, TestingModule } from '@nestjs/testing';
import { MugPersistenceController } from './mug-persistence.controller';
import { MugPersistenceService } from './mug-persistence.service';

describe('MugPersistenceController', () => {
  let mugPersistenceController: MugPersistenceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MugPersistenceController],
      providers: [MugPersistenceService],
    }).compile();

    mugPersistenceController = app.get<MugPersistenceController>(MugPersistenceController);
  });

  describe('root', () => {
    it('should be truthy', () => {
      expect(mugPersistenceController).toBeTruthy()
    });
  });
});
