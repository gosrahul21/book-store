import { HttpException, Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { UserRole } from "src/common/config/constant";
import { FirebaseAuthService } from "src/common/services/firebase.service";
import { UserDto } from "../user/dto/user.dto";
import { UsersService } from "../user/user.service";

@Injectable()
export class AuthService {
    constructor(private readonly firebaseService: FirebaseAuthService, 
        private readonly usersService: UsersService){}


    async signUp(userDto: UserDto, authorization: string){
        // get {uid} by decoding firebase token
        // fetch user for authId = uid
        // if no user found then save userDto in db
        try {
            const firebaseResponse = await this.firebaseService.authenticate(authorization);
            console.log(firebaseResponse);
            const {uid, email, name } = firebaseResponse;
            if(!uid)
                throw new NotFoundException("Not verified");
            // check if any user exist of the same uid
            const user = await this.usersService.getUserByAuthId(uid);

            // if user already exist then send its details and login
            if(user)
                return user;
            
            // create new user 
            const userDetail = {name, role: UserRole.GUEST, authId: uid,email, isVerified: true };
            const newUser = await this.usersService.createUser(userDetail);
            return newUser;
        } catch (error) {
            throw error;
        }
    }
    
}