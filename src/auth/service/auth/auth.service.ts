import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthenticationProvider } from '../../../../src/auth/auth';
import { Repository } from 'typeorm';
import { User } from '../../../../src/entity';
import { UserDetails } from '../../../../src/utils/types';

@Injectable()
export class AuthService implements AuthenticationProvider {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async validateUser(details: UserDetails) {
        const { discordId } = details;
        const user = await this.userRepository.findOne({ where: { discordId } })

        if (user) return user
        return this.createUser(details)
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
        return this.userRepository.save(user)
    }

    findUser(discordId: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { discordId } })
    }

}
