import { User } from "src/entity";
import { UserDetails } from "../utils/types";

export interface AuthenticationProvider {
    validateUser(details: UserDetails);
    createUser(details: UserDetails);
    findUser(discordId: string): Promise<User | undefined>;
}