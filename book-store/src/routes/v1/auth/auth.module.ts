import { Module } from "@nestjs/common";
import { FirebaseAuthService } from "src/common/services/firebase.service";
import { UserModule } from "../user/user.module";
import { UsersService } from "../user/user.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports:[UserModule],
    providers:[ AuthService, FirebaseAuthService ],
    controllers:[AuthController]
})
export class  AuthModule{}