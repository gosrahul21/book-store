import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';

// import admin from '../../main';
import * as admin from 'firebase-admin';
// import { MyLogger } from '@shared/logger/logger.service';
import * as CONSTANT from '../config/constants/message.constant'

@Injectable()
export class FirebaseAuthService {

  constructor(
    // private logger: MyLogger,
    
  ) { }

  private getToken(authToken: string): string {
    const match = authToken.match(/^Bearer (.*)$/);
    if (!match || match.length < 2) {
      throw new UnauthorizedException(CONSTANT.INVALID_BEARER_TOKEN);
    }
    return match[1];
  }

  public async authenticate(authToken: string): Promise<admin.auth.DecodedIdToken> {

    
    try {
        console.log(authToken)
      const tokenString = this.getToken(authToken);
      const decodedToken: admin.auth.DecodedIdToken = await admin.auth().verifyIdToken(tokenString);
      console.log(`${JSON.stringify(decodedToken)}`);
      console.log('decoded token',decodedToken);
    //   const {
    //     email,
    //     uid,
    //     role,
    //   } = decodedToken;
      return decodedToken;
    } catch (err) {
      console.log(`error while authenticate request ${err.message}`)
      throw new UnauthorizedException(err.message);
    }
  }




}