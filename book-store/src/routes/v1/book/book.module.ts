import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FirebaseAuthService } from "src/common/services/firebase.service";
import { UserModule } from "../user/user.module";
import { BooksController } from "./book.controller";
import { BooksService } from "./book.service";
import { BooksRepository } from "./repositories/book.repository";
import { Book, BookSchema } from "./schemas/book.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Book.name,
                schema: BookSchema
            }
        ]),
        UserModule
    ],
    controllers:[BooksController],
    providers:[BooksService, BooksRepository,FirebaseAuthService],
    exports:[],
})
export default class BookModule{ }