import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { IUserService } from "src/user/services/user/user";
import { User } from "../../entity";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(
        // private userService: IUserService,
    ) {
        super()
    }

    serializeUser(user: User, done: (err: Error, user: User) => void) {
        done(null, user)
    }

    deserializeUser(payload: any, done: (err: Error, user: User) => void) {
        const userDb = new User();
        done(null, userDb)
    }
}