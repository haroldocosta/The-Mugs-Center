import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthenticationGuard, DiscordAuthGuard } from '../../guards';

@Controller('auth')
export class AuthController {

    /**
     * Get /api/auth/login
     * User will authenticate here
     */
    @Get('login')
    @UseGuards(DiscordAuthGuard)
    login() {
        console.log('login')
        return;
    }
    
    /**
     * Get /api/auth/redirect
     * Provider will call here for the redirect
     */
    @Get('redirect')
    @UseGuards(DiscordAuthGuard)
    redirect(@Res() res: Response ) {
        console.log('redirect')
        res.sendStatus(200)
    }
    
    /**
     * Get /api/auth/status
     * Retrieve auth status
     */
    @Get('status')
    @UseGuards(AuthenticationGuard)
    status() {
        return 'ok'
    }
    
    /**
     * Get /api/auth/logout
     * User will call to logout
     */
    @Get('logout')
    logout() { }
}
