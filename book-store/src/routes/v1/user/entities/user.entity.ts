import { Types } from "mongoose";

export class UserEntity{
    name: string;
    email: string;
    role: string;
    authId: string;
    isVerified?: boolean;
    wishlist?:Types.ObjectId[];
    cart?: any;
}