import { Injectable, NotFoundException } from "@nestjs/common";
import { Types } from "mongoose";
import { filter } from "rxjs";
import { SortOrder, SortOrderType } from "src/common/config/constants/category.constant";
import { BookDto } from "./dto/book.dto";
import { BookEntity } from "./entities/book.entity";
import { BooksRepository } from "./repositories/book.repository";

@Injectable()
export class BooksService {
    constructor(private readonly booksRepository: BooksRepository){

    }

    // add book or create book document
    async createBook(bookDto: BookDto){
        const newBook = await this.booksRepository.createBook(bookDto);
        return newBook;
    }

    async getBooks(title: string, isbn: string, author: string, discountMin: number, discountMax: number, sortByPrice: SortOrderType, sortByDiscount: SortOrderType, sortByDate: SortOrderType, limit: number, pNo: number){
        // add pagination as well 
        // query & parameter
        const filterQuery: any = {}
        
        if(title)
            filterQuery.title = { $regex: title, $options: 'i' };

        if(isbn)
            filterQuery.isnb = isbn;
        
        if(author)
            filterQuery.author =  { $regex: author, $options: 'i' };
        
        if(discountMin)
            filterQuery.discount = {$gt: discountMin};
        
        if(discountMax)
            filterQuery.discount = {$lte: discountMax};
            
        const sortQuery: any = {};

        if(sortByPrice)
            sortQuery.price = SortOrder[sortByPrice];
        
        if(sortByDiscount)
            sortQuery.discount = SortOrder[sortByPrice];
        
        if(sortByDate)
            sortQuery.createdAt = SortOrder[sortByDate];

        limit = limit || 6;
        pNo = pNo || 1;

        return await this.booksRepository.getBooks(filterQuery,sortQuery, limit, pNo);
    }

    async getBookById(bookId: Types.ObjectId){
         const book = await this.booksRepository.getBookById(bookId);
         if(!book)
            throw new NotFoundException(`book not found for the book ID ${bookId}`);
        return book;
    }

    async deleteBookById(bookId: Types.ObjectId){

    }

}