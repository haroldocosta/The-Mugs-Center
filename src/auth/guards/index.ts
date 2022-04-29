import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class DiscordAuthGuard extends AuthGuard('discord'){
    async canActivate(context: ExecutionContext): Promise<any> {
        console.log('canActivate')
        const activate = ( await super.canActivate(context)) as boolean
        const request = context.switchToHttp().getRequest()
        await super.logIn(request)
        return activate
    }

}