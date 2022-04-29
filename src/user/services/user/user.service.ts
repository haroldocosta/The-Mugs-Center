import { Injectable } from '@nestjs/common';
import { UserDto } from '../../../../src/user/dto/user';
import { IUserService } from './user';

@Injectable()
export class UserService implements IUserService {
    constructor(){}
    private users: UserDto[] = []
    
    createUser(user: UserDto){
        return this.users.push(user)
    }
    
    getUser(){
        return this.users
    }

    deleteUser(){
        return 'UserDeletado'
    }
}
