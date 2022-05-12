import { User } from "src/entity";
import { UserDto } from "src/user/dto/user";
import { UserDetails } from "src/utils/types";

export interface IUserService {
    getAllUsers();
    createUser(user: UserDetails);
    getUserById(id: string);
    getUserByDiscordId(discordId: string): Promise<User | undefined>;
    deleteUser(id: string);
    favoriteMug(id: string, mugId: string);
}