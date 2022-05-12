import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MugModule } from '../../../mug/mug.module';
import { MugService } from '../../../mug/services/mug.service';
import { UserModule } from '../../../user/user.module';
import { UserRepository } from '../../../user/user.repository';
import { UserService } from './user.service';

const mockUserRepository = {
  find: jest.fn(),
}


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

const mockMug = {
  "id": "3f506a33-f6cc-4889-b691-5d4f6c9cc721",
  "isActive": true,
  "isArchived": true,
  "createDateTime": "2022-05-10T23:35:12.287Z",
  "createdBy": "Haroldo Costa",
  "lastChangedDateTime": "2022-05-10T23:35:12.287Z",
  "lastChangedBy": "Haroldo Costa",
  "internalComment": null,
  "name": "Copinho",
  "description": "Copinho"
}

const mockUserService = {
  getAllUsers: jest.fn(() => {
    return [mockUser]
  }),
  createUser: jest.fn((user) => {
    return mockUser
  }),
  getUserByDiscordId: jest.fn((discordId:string) => {
    return mockUser
  }),
  getUserById: jest.fn((id:string) => {
    return mockUser
  }),
  favoriteMug: jest.fn((id:string,mugId:string,) => {
    return mockUser
  }),
  deleteUser: jest.fn((id:string) => {
    return mockUser
  }),
}

const mockMugService = {
  find: jest.fn(() => {
    return [mockUser]
  }),
}

fdescribe('UserService', () => {
  let userService: UserService;
  let userRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        UserRepository,
        MugService,
      ],
    })
      .overrideProvider(MugService).useValue(mockMugService)
      .overrideProvider(UserService).useValue(mockUserService)
      .overrideProvider(UserRepository).useValue(mockUserRepository)
      .compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('getAllUsers', () => {
    it('should return all users', async () => {
      expect(userService.getAllUsers()).toEqual([mockUser])
    })
  })

  describe('createUser', () => {
    it('should save new user', async () => {
      expect(userService.createUser(mockUser)).toEqual(mockUser)
    })
  })

  describe('getUserByDiscordId', () => {
    it('should return a user by discordId', async () => {
      expect(userService.getUserByDiscordId(mockUser.discordId)).toEqual(mockUser)
    })
  })

  describe('getUserById', () => {
    it('should return a user by id', async () => {
      expect(userService.getUserById(mockUser.discordId)).toEqual(mockUser)
    })
  })

  describe('favoriteMug', () => {
    it('should save user favorite mug', async () => {
      expect(await userService.favoriteMug(mockUser.id, mockMug.id)).toEqual(mockUser)
    })
  })

  describe('deleteUser', () => {
    it('should inactive user', async () => {
      expect(await userService.deleteUser(mockUser.discordId)).toEqual(mockUser)
    })
  })
});
