import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { IUserService } from "src/user/services/user/user";
import { Done } from "../../../src/utils/types";
import { User } from "../../entity";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('USER_SERVICE')
        private readonly userService: IUserService,
    ) {
        super()
    }

    serializeUser(user: User, done: Done) {
        done(null, user)
    }

    async deserializeUser(user: User, done: Done) {
        const { discordId } = user
        const userDb = await this.userService.getUserByDiscordId(discordId)
        return userDb ? done(null, userDb) : done(null, null)
    }
}