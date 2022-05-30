import { ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ValidationExceptions from './common/exception/validation.exception';
import * as firebaseAdmin from 'firebase-admin';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{bufferLogs: true, cors: true});
  app.setGlobalPrefix('api');
  app.useGlobalPipes( new ValidationPipe(
    {
      exceptionFactory: (errors: ValidationError[]) => new ValidationExceptions(errors),
      transform: true,
      forbidNonWhitelisted: true,
      whitelist: true
    }
  ));

  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDE+z1yJ6iXVB2Y\n68lHh+7LShDN80MvMnZbNj8LvRm4svLdhoWg55dawdUCGghyyYarjQdc1LU5r5CO\nhf/UAQgWzwOC3GwHPPToCZxLqAMOa02Lg5hzqa/pLrX+TVrkk+LrXzg9nqtfigLR\nkSPio5OdwnRVTJphW3Uh2FCgfIe47BNhYei3vynGEA04oQmQkYkG59QmfASpVf45\nRdRcGvgd9n+OAhbTfytAeyqIG1NUgzpHPJps1YcyKJryLKTfjvc+YGyRXkpmDHbh\n0LBvXG0c0Nz1yz3thduTH8AVbJV0KJb5YSzpah8lb8TW0K/L/MMvBWOL7rEOPRLk\nhTRmMUx1AgMBAAECggEABQ23Cn4QHrXGrFPlaZEstmRO/DPw2obp0/+pfo2sop3J\n03Ib/xuUOSFaECTP1fYQVhDN+A051CtBHoXNs38Oa//zxJvFyyoH1HdKFSg9z9T2\nMrIH9HTWqHANa/VIzwoD9rQOLkA9gE4NVppXb0ZMorb/fqBys32406aIInAxvKGt\nwjgjKKaDIWT304HG6JhKh4awUgJp74QG7IbHszUJt/yIMkmfO4BOQaiff+1B9mRQ\nV2YUnLka281c1azFw8ArS613sa5wlcEsfLcz7TyU1NxaUnrIts4XZwu5jPcYU89S\nuIwxyuC4/VLkyAkG005CodD3ZgvYUImCdS15a+NZHwKBgQDsBddOqKyfHOkvwbSC\nIwMzugfjrTPEItXY72+pyHZqpozQSLIbTdtp3PyFUklKwIi9Jl7rtPDuN+JfmDxV\nukRIDUeuuqQPTf4Zkyxob/el7/ksgNlcgP01LSvQB78wEexDJhL6/scGOLi3uLRM\npOQfYaaZgOo8soYGP4lJc4xuxwKBgQDVp3JsFmi9/GOol2H3I7lWiQmucJQpOAn9\n5lv9ApHpi9IbEzm3mKIr/xPCBd0OcyhN/nIfF8WDfaOnZPYJ9nBiBTTPJtlho9gJ\nbg3W7v34xs04i+tscZO465KN1wFjEiLMPNVFqpw+g7JTe4SKxrQz2/YOstV166h/\nqGBvuhJe4wKBgCmPTb5YDS1nVdhG75YKvEGbfFAm63qZ97XfU3Y+Cjv1X849Pr94\nEi6t7vk66BT1mh5UZ1px3grUZFQY5mbiCav2Sq0FyGW5ggjW1Xb+YEkj3Ghtt9iG\nDhATCCf1dUDtpwCb77OqsTjzO/N93qGwV0r/UuqsvJI7jUYEYhRA+HV5AoGAKqu7\ntYywNKmQud4qKbLP1FGgRl+jp6vSiwwT+S8nNy6+srufPmTUltbl+k0zfixPs2wL\nHNyhjQZtxgPrA8hdX6ZMisbmiZKwlgmN6AxpWuNRn2aKiWkRqNAbwApd84xuuL25\nlqVheTbSScwUh6bx3J2kwgDDkz6Ss5RMVmQiQSMCgYAft4DCsr1EfnKYUCYKueUG\nTFPuAl2bfZe+2yTdETHZD6YDKRannCvnlrVHT3Ao8+urt2bTtTjy/mEVZ03ZqOp6\nbZG6ycgc7JgirV13WQcrnYRD8n0eNActzAfsx/1t/5m1rkzI55tSxMs3QucYx4JB\nZJ8XzBUk0HbgFhulFEhpbA==\n-----END PRIVATE KEY-----\n", 
      client_email: "firebase-adminsdk-16l0s@ecommerce-16239.iam.gserviceaccount.com",
      project_id: "ecommerce-16239"
    } as Partial<firebaseAdmin.ServiceAccount>),
    // databaseURL: configService.get().firebase.databaseURL
  });

    // Setting latest fastify swagger configuration for api documentation purpose
    const swaggerConfig = new DocumentBuilder()
    .setTitle('Book Store App')
    .setDescription(
      'This is the Book Store api doc designed to configure clients.',
    )
    .setVersion('1.0.0')
    .addTag('Book Store App')
    .addBearerAuth()
    .build();

    const swagger = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api/v1/docs', app, swagger);
  // {
  //   "type": "service_account",
  //   "project_id": "ecommerce-16239",
  //   "private_key_id": "30e5df58e37d40c003ff23baeb0e64494c7dc245",
  //   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDE+z1yJ6iXVB2Y\n68lHh+7LShDN80MvMnZbNj8LvRm4svLdhoWg55dawdUCGghyyYarjQdc1LU5r5CO\nhf/UAQgWzwOC3GwHPPToCZxLqAMOa02Lg5hzqa/pLrX+TVrkk+LrXzg9nqtfigLR\nkSPio5OdwnRVTJphW3Uh2FCgfIe47BNhYei3vynGEA04oQmQkYkG59QmfASpVf45\nRdRcGvgd9n+OAhbTfytAeyqIG1NUgzpHPJps1YcyKJryLKTfjvc+YGyRXkpmDHbh\n0LBvXG0c0Nz1yz3thduTH8AVbJV0KJb5YSzpah8lb8TW0K/L/MMvBWOL7rEOPRLk\nhTRmMUx1AgMBAAECggEABQ23Cn4QHrXGrFPlaZEstmRO/DPw2obp0/+pfo2sop3J\n03Ib/xuUOSFaECTP1fYQVhDN+A051CtBHoXNs38Oa//zxJvFyyoH1HdKFSg9z9T2\nMrIH9HTWqHANa/VIzwoD9rQOLkA9gE4NVppXb0ZMorb/fqBys32406aIInAxvKGt\nwjgjKKaDIWT304HG6JhKh4awUgJp74QG7IbHszUJt/yIMkmfO4BOQaiff+1B9mRQ\nV2YUnLka281c1azFw8ArS613sa5wlcEsfLcz7TyU1NxaUnrIts4XZwu5jPcYU89S\nuIwxyuC4/VLkyAkG005CodD3ZgvYUImCdS15a+NZHwKBgQDsBddOqKyfHOkvwbSC\nIwMzugfjrTPEItXY72+pyHZqpozQSLIbTdtp3PyFUklKwIi9Jl7rtPDuN+JfmDxV\nukRIDUeuuqQPTf4Zkyxob/el7/ksgNlcgP01LSvQB78wEexDJhL6/scGOLi3uLRM\npOQfYaaZgOo8soYGP4lJc4xuxwKBgQDVp3JsFmi9/GOol2H3I7lWiQmucJQpOAn9\n5lv9ApHpi9IbEzm3mKIr/xPCBd0OcyhN/nIfF8WDfaOnZPYJ9nBiBTTPJtlho9gJ\nbg3W7v34xs04i+tscZO465KN1wFjEiLMPNVFqpw+g7JTe4SKxrQz2/YOstV166h/\nqGBvuhJe4wKBgCmPTb5YDS1nVdhG75YKvEGbfFAm63qZ97XfU3Y+Cjv1X849Pr94\nEi6t7vk66BT1mh5UZ1px3grUZFQY5mbiCav2Sq0FyGW5ggjW1Xb+YEkj3Ghtt9iG\nDhATCCf1dUDtpwCb77OqsTjzO/N93qGwV0r/UuqsvJI7jUYEYhRA+HV5AoGAKqu7\ntYywNKmQud4qKbLP1FGgRl+jp6vSiwwT+S8nNy6+srufPmTUltbl+k0zfixPs2wL\nHNyhjQZtxgPrA8hdX6ZMisbmiZKwlgmN6AxpWuNRn2aKiWkRqNAbwApd84xuuL25\nlqVheTbSScwUh6bx3J2kwgDDkz6Ss5RMVmQiQSMCgYAft4DCsr1EfnKYUCYKueUG\nTFPuAl2bfZe+2yTdETHZD6YDKRannCvnlrVHT3Ao8+urt2bTtTjy/mEVZ03ZqOp6\nbZG6ycgc7JgirV13WQcrnYRD8n0eNActzAfsx/1t/5m1rkzI55tSxMs3QucYx4JB\nZJ8XzBUk0HbgFhulFEhpbA==\n-----END PRIVATE KEY-----\n",
  //   "client_email": "firebase-adminsdk-16l0s@ecommerce-16239.iam.gserviceaccount.com",
  //   "client_id": "109077122063709514596",
  //   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //   "token_uri": "https://oauth2.googleapis.com/token",
  //   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-16l0s%40ecommerce-16239.iam.gserviceaccount.com"
  // }
  
  await app.listen(8000);
}
bootstrap();
