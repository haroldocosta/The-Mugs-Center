import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../../../src/user/user.repository';
import { UserDto } from '../../../../src/user/dto/user';
import { IUserService } from './user';

@Injectable()
export class UserService implements IUserService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository,
    ) { }

    createUser(user: UserDto) {
        return this.userRepository.save(user)
    }

    getAllUsers() {
        return this.userRepository.find()
    }

    getUserById(id: string) {
        return this.userRepository.findOne(id)
    }

    deleteUser(id: string) {
        return this.userRepository.delete(id)
    }
}
