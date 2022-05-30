import { CanActivate, HttpException, HttpStatus, ExecutionContext, UnauthorizedException, Injectable } from "@nestjs/common";


import * as lodash from 'lodash'
import { FirebaseAuthService } from "src/common/services/firebase.service";
import { UsersService } from "src/routes/v1/user/user.service";
@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor( private readonly firebaseAuthService: FirebaseAuthService, private readonly usersService: UsersService ){}
    
    async verifyUsingFirebase(authorization){
        const { uid } = await this.firebaseAuthService.authenticate(authorization);
        return await this.usersService.getUserByAuthId(uid);
    }


    // async verifyUsingJwt(authorization){
    //     const token = authorization.split(' ')[1];
    //     return await this.authService.verifyToken(token);
    // }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const { headers: { authorization }} = request;
        if(!authorization) 
          throw new HttpException({message:"Token not provided"}, HttpStatus.BAD_REQUEST);
        // const { uid } = await this.firebaseAuthService.authenticateToken(authorization);
        // const user = await this.usersService.getUserByQueryModified({ authId: uid });
        const user = await this.verifyUsingFirebase(authorization);
        if(lodash.isEmpty(user)) 
           throw new UnauthorizedException();

        request.user = user;
        return true;
      }
}
