import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from 'src/common/config/constant';
import { FirebaseAuthService } from 'src/common/services/firebase.service';
import { UsersService } from 'src/routes/v1/user/user.service';
import { Request } from 'express';




@Injectable()
export default class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    // private jwtService: JwtService,
    private usersService: UsersService,
    private firebaseAuthService: FirebaseAuthService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request: Request = context.switchToHttp().getRequest();
    // const tokenData = (await this.jwtService.decode(request.headers.authorization?.split('Bearer')[1].trim() as string) as JwtDecodeResponse | null);
       const tokenData = await this.firebaseAuthService.authenticate(request.headers.authorization);
       const userData = await this.usersService.getUserByAuthId(tokenData.uid);
    // if (tokenData?.role === RolesEnum.ADMIN) {
       if (userData?.role === UserRole.ADMIN) {
         return true;
        }
      // return !tokenData ? false : roles.includes(tokenData?.role);
      return !userData ? false : roles.includes(userData?.role)
  }
}
