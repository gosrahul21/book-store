import { InjectModel } from "@nestjs/mongoose";
import { Model, MongooseError, Types } from "mongoose";
import { MongoError } from 'mongodb';
import { BookEntity } from "../entities/book.entity";
import { Book, BookDocument } from "../schemas/book.schema";

export class BooksRepository {
    constructor(
        @InjectModel(Book.name) private readonly booksModel: Model<BookDocument>,
        // private logger: MyLogger
      ) {
        // this.logger.setContext(BookRepository.name);
      }
    

      async createBook(bookEntity: BookEntity): Promise<BookEntity|null>{
        try {
            const book = await this.booksModel.create(bookEntity);
            return book.toObject();
        } catch (error) {
            console.log(error)
            throw new MongoError(error);
        }
      }


      async getBookById(bookId: Types.ObjectId): Promise<BookEntity|null>{
        try {
            const book = await this.booksModel.findById(bookId).lean();
            return book;
        } catch (error) {
            throw new MongoError(error);
        }
      }

      async getBooks(filterQuery?: any, sortQuery?: any, limit?: number, pNo?: number){
          try {
              const books = await this.booksModel.find(filterQuery)
              .sort(sortQuery)
              .skip(limit*(pNo-1))
              .limit(limit)
              .lean();
              return books;
          } catch (error) {
              throw new MongoError(error);
          }
      }


      async deleteBookById(bookId: Types.ObjectId){

      }

      /**
       * Update book document 
       * @param bookId 
       * @param updateBookDto 
       * @returns The newly updated book document of type `BookEntity`
       */
      async updateBookById(bookId: Types.ObjectId, updateBookDto){
        try {
            
        } catch (error) {
            throw new MongoError(error);
        }
      }

}