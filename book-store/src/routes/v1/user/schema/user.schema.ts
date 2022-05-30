import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { UserRole } from "src/common/config/constant";
import { Book } from "../../book/schemas/book.schema";

@Schema()
export class User {
    @Prop({
        type: String,
        required:true
    })
    name:string;

    @Prop({
        type: String,
        unique: true
    })
    email: string;

    @Prop({
        type: Boolean,
        default: false
    })
    isVerified?: boolean;

    @Prop({
        type: String,
        required:true,
        index:true,
        unique: true
    })
    authId: string;

    @Prop({
        type: String,
        enum: ['guest', 'admin'],
        default: UserRole.GUEST
    })
    role?: string;

    @Prop({
        type: [Types.ObjectId],
        ref: Book.name
    })
    wishlist?: Types.ObjectId[];

    @Prop({
        type: Array
    })
    cart?: [
        {
            productId: Types.ObjectId,
            count: number
        }
    ];



}

export type UserDocument = User & Document;

export const UsersSchema = SchemaFactory.createForClass(User).set(
    'versionKey',
    false,
  );
  
  
