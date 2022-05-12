import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';


const mockUser = {
  id: "90ff7971-bc3d-4d32-86a4-41d9fb5f0e7a",
  isActive: true,
  isArchived: true,
  createDateTime: "2022-05-11T21:01:57.875Z",
  createdBy: "discord",
  lastChangedDateTime: "2022-05-11T21:01:57.875Z",
  lastChangedBy: "discord",
  internalComment: null,
  username: "miteimto",
  discordId: "365337126914752512",
  discriminator: "0863",
  avatar: null
}

const mockAuthService = {
  validateUser: jest.fn(() => {
    return mockUser
  }),
}

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    })
      .overrideProvider(AuthService).useValue(mockAuthService)
      .compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {
    it('should validate user', async () => {
      expect(service.validateUser(mockUser)).toEqual(mockUser)
    })
  })
});
