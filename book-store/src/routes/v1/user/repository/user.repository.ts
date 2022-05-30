import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { MongoError } from "mongodb";
import { Model } from "mongoose";
import { User, UserDocument } from "../schema/user.schema";

@Injectable()
export class UsersRepository {
    constructor(@InjectModel(User.name) private readonly usersModel: Model<UserDocument>){}

    async createUser(user: User){
        try {
            const newUser = await this.usersModel.create(user);
            return newUser.toObject();
        } catch (error) {
            throw new MongoError(error)
        }
    }


    async getUserByAuthId(authId: string){
        try {
            const user = await this.usersModel.findOne({authId}).lean();
            return user;
        } catch (error) {
            new MongoError(error)
        }
    }
}