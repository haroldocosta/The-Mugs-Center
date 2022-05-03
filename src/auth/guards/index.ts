import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class DiscordAuthGuard extends AuthGuard('discord'){
    async canActivate(context: ExecutionContext): Promise<any> {
        console.log('canActivate',context)
        const activate = ( await super.canActivate(context)) as boolean
        const request = context.switchToHttp().getRequest()
        console.log(request)
        await super.logIn(request)
        console.log(activate)
        return activate
    }

}

@Injectable()
export class AuthenticationGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean>{
        const req = context.switchToHttp().getRequest()
        console.log(req.isAuthenticated())
        return req.isAuthenticated()
    }
}