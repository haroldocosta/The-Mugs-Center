import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../../../src/user/user.repository';
import { IUserService } from './user';
import { UserDetails } from '../../../../src/utils/types';
import { User } from '../../../../src/entity';
import { MugService } from '../../../../src/mug/services/mug.service';

@Injectable()
export class UserService implements IUserService {

    private readonly logger = new Logger('UserService');

    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository,
        @Inject('MUG_SERVICE')
        private readonly mugService: MugService,
    ) { }

    getAllUsers() {
        return this.userRepository.find({ where: { isActive: true } })
    }

    createUser(details: UserDetails) {
        const newUser = {
            ...details,
            isActive: true,
            isArchived: true,
            createdBy: 'discord',
            lastChangedBy: 'discord',
            internalComment: null,
        }
        const user = this.userRepository.create(newUser)
        this.logger.log(`Saving this new user: ${JSON.stringify(user)}`)
        return this.userRepository.save(user)
    }

    getUserByDiscordId(discordId: string): Promise<User | undefined> {
        this.logger.log(`Getting user by discordId: ${discordId}`)
        return this.userRepository.findOne({ where: { discordId } })
    }

    getUserById(id: string) {
        this.logger.log(`Getting user by id: ${id}`)
        return this.userRepository.findOne(id)
    }

    async favoriteMug(id: string, mugId: string) {
        this.logger.log(`User ${id} try favoriting mug: ${mugId}`)
        const user = await this.getUserById(id);
        this.logger.log(`User Object found`)
        const mug = await this.mugService.findOne(mugId)
        this.logger.log(`Mug Object found`)
        user.favorites.push(mug)
        this.logger.log(`Mug pushed to User favorites`)
        return this.userRepository.save(user)
    }

    deleteUser(id: string) {
        this.logger.log(`Deleting user by id: ${id}`)
        const found = this.userRepository.findOne(id)
        this.logger.log(`User found`)
        const user = this.userRepository.create({ ...found, isActive: false })
        this.logger.log(`User isActive flag set to false`)
        return this.userRepository.update(id, user)
    }
}
