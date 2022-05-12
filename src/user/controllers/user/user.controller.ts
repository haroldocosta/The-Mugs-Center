import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Param, Post } from '@nestjs/common';
import { UserDetails } from '../../../../src/utils/types';
import { IUserService } from '../../../../src/user/services/user/user';

@Controller('user')
export class UserController {
    constructor(
        @Inject('USER_SERVICE')
        private readonly userService: IUserService,
    ) { }

    @Get()
    @HttpCode(HttpStatus.FOUND)
    getUsers(){
        return this.userService.getAllUsers()
    }
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    createUser(@Body() user: UserDetails){
        return this.userService.createUser(user)
    }

    @Post('/:id')
    @HttpCode(HttpStatus.CREATED)
    favoriteMug(@Param('id') id: string, @Body('id') mugId: string){
        return this.userService.favoriteMug(id, mugId)
    }

}
