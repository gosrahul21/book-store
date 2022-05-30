import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { UserRole } from "src/common/config/constant";

export class UserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    // @IsEmail
    // email: string;

    // @Prop({
    //     type: Boolean,
    //     default: false
    // })
    // isVerified: boolean;

    // @Prop({
    //     type: String,
    //     required:true,
    //     index:true,
    //     unique: true
    // })
    // authId: string;

    @IsEnum(UserRole)
    @IsString()
    @IsNotEmpty()
    role: string;
}