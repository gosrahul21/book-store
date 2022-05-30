import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserDto } from "../user/dto/user.dto";
import { AuthService } from "./auth.service";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Post('signup')
    async signUp(@Body() userDto: UserDto, @Req() req ){
        // extract authorization token
        // decode firebase token & fetch user in db from uid 
        // if user doesnot exist then create user
        const { headers: {authorization} } = req;
        return await this.authService.signUp(userDto, authorization);
    }   


    @Get()
    async login(){
        return "hellow orld"
    }



    
}