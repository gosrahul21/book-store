import { Module } from "@nestjs/common";
import { RouterModule, Routes } from "nest-router";
import { AuthModule } from "./auth/auth.module";
import { BooksController } from "./book/book.controller";
import BookModule from "./book/book.module";
import { UserModule } from "./user/user.module";


const routes: Routes = [
    {
      path: '/v1',
      children: [
        {path:'/', module: BookModule},
        {path:'/', module: UserModule},
        {path:'/', module: AuthModule}
      ],
    },
  ];

@Module({
    imports: [ RouterModule.forRoutes(routes), BookModule, UserModule, AuthModule ],
    // controllers:[BooksController]
})
export class V1Module {}