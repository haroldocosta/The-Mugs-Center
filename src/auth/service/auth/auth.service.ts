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
        const user = await this.userRepository.findOne(discordId)

        if (user) return user
        return await this.createUser(details)
    }

    createUser(details: UserDetails) {
        console.log('User created ', details)
        const user = this.userRepository.create(details)
        return this.userRepository.save(user)
        // this.userRepository.save(details)
    }

    findUser() {
        throw new Error('Method not implemented.');
    }

}
