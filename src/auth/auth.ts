import { User } from "src/entity";
import { UserDetails } from "../utils/types";

export interface AuthenticationProvider {
    validateUser(details: UserDetails);
}