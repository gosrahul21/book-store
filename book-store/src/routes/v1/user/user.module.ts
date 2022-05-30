import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersRepository } from "./repository/user.repository";
import { User, UsersSchema } from "./schema/user.schema";
import { UsersService } from "./user.service";

@Module({
    imports:[MongooseModule.forFeature([
        {
            name: User.name,
            schema: UsersSchema
        }
    ])],
    providers:[UsersService, UsersRepository],
    controllers:[],
    exports:[UsersService]
})
export class UserModule{}