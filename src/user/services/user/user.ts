import { UserDto } from "src/user/dto/user";

export interface IUserService {
    getAllUsers();
    createUser(user: UserDto);
    getUserById(id: string);
    deleteUser(id: string);
}