import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../config/constant';



export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);
