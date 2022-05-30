import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { UserEntity } from "./entities/user.entity";
import { UsersRepository } from "./repository/user.repository";


@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository){}

    async createUser(user: UserEntity){
        const newUser = await this.usersRepository.createUser(user);
        if(!newUser)
            throw new HttpException('User not created', 401);
        return newUser;
    }

    async getUserByAuthId(authId: string){
        const user = await this.usersRepository.getUserByAuthId(authId);
        return user;
    }
}