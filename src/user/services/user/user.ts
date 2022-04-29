import { UserDto } from "src/user/dto/user";

export interface IUserService {
    getUser();
    createUser(user: UserDto);
    deleteUser();
}