import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { Done } from "../../../src/utils/types";
import { User } from "../../entity";
import { AuthenticationProvider } from "../auth";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('AUTH_SERVICE')
        private readonly authService: AuthenticationProvider,
    ) {
        super()
    }

    serializeUser(user: User, done: Done) {
        done(null, user)
    }

    async deserializeUser(user: User, done: Done) {
        const { discordId } = user
        const userDb = await this.authService.findUser(discordId)
        return userDb ? done(null, userDb) : done(null, null)
    }
}