import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthenticationProvider } from '../../../../src/auth/auth';
import { Repository } from 'typeorm';
import { User } from '../../../../src/entity';
import { UserDetails } from '../../../../src/utils/types';
import { IUserService } from '../../../user/services/user/user';

@Injectable()
export class AuthService implements AuthenticationProvider {

    private readonly logger = new Logger('AuthService');

    constructor(
        @Inject('USER_SERVICE')
        private readonly userService: IUserService,
    ) { }

    async validateUser(details: UserDetails) {
        const { discordId } = details;
        this.logger.log(`Validating user by discordId: ${discordId}`)
        const user = await this.userService.getUserByDiscordId(discordId)

        if (user) {
            this.logger.log(`Validated user: ${user}`)
            return user
        }
        this.logger.log(`No user found by discordId: ${discordId}`)
        return this.userService.createUser(details)
    }

}
