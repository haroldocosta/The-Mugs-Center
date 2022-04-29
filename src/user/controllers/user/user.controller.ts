import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Post } from '@nestjs/common';
import { UserDto } from '../../../../src/user/dto/user';
import { IUserService } from '../../../../src/user/services/user/user';

@Controller('user')
export class UserController {
    constructor(
        @Inject('USER_SERVICE')
        private readonly userService: IUserService,
    ) { }

    @Get()
    @HttpCode(HttpStatus.CREATED)
    getUsers(){
        return this.userService.getUser()
    }

    @Post()
    createUser(@Body() user: UserDto){
        return this.userService.createUser(user)
    }


}
