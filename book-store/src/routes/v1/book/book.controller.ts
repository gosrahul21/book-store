import { Body, Controller, Get, Param, Post, Query, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiQuery, ApiTags } from "@nestjs/swagger";
import { Types } from "mongoose";
import { UserRole } from "src/common/config/constant";
import { SortOrderType } from "src/common/config/constants/category.constant";
import { Roles } from "src/common/decorators/roles.decorator";
import RolesGuard from "src/resources/guards/roles.guard";
import { User } from "../user/schema/user.schema";
import { BooksService } from "./book.service";
import { BookDto } from "./dto/book.dto";
import { BookEntity } from "./entities/book.entity";

@ApiTags('books')
@Controller('books')
@ApiBearerAuth()
export class BooksController {

    constructor(private readonly booksService: BooksService){}

    // @Get()
    // getBooks(){
    //     return 'books got called'
    // }
    @Roles(UserRole.ADMIN)
    @UseGuards(RolesGuard)
    @Post()
    async addBook(@Body() bookDto : BookDto): Promise<BookEntity>{
        return await this.booksService.createBook(bookDto);
    }

    /**
     * get books by query params
     * newest arrival -> sort by date in descending order
     * search common -> title, isbn, author
     * limit = 6
     * sort by rating -> sort by rating in descending order,
     * sort by price -> low to high, high to low
     * @returns 
     */
     @ApiQuery({
        name: 'common',
        type: String,
        required: false
    })
    @ApiQuery({
        name: 'title',
        type: String,
        required: false
    })
    @ApiQuery({
        name: 'isbn',
        type: String,
        required: false
    })
    @ApiQuery({
        name: 'author',
        type: String,
        required: false,
        description: 'Author name'
    })
    @ApiQuery({
        name: 'discountMin',
        type: Number,
        required: false,
        description:"fetch book with minimum discount percentage"
    })
    @ApiQuery({
        name: 'discountMax',
        type: Number,
        required: false,
        description:"fetch book with maximum discount percentage"
    })
    @ApiQuery({
        name: 'sortByDate',
        type: String,
        enum: SortOrderType,
        required: false
    })
    @ApiQuery({
        name: 'sortByPrice',
        type: String,
        enum: SortOrderType,
        required: false
    })
    @ApiQuery({
        name: 'sortByDiscount',
        type: String,
        enum: SortOrderType,
        required: false
    })
    @ApiQuery({
        name: "limit",
        type: String,
        description: "No of records required",
        required: false
      })
      @ApiQuery({
        name: "page",
        type: String,
        description: "pass the page no to retrieve specific page data",
        required: false
      })
    @Get()
    async getBooks(
    @Query('common') common: string,
    @Query('sortByDate') sortByDate: SortOrderType, 
    @Query('sortByPrice') sortByPrice: SortOrderType,
    @Query('sortByDiscount') sortByDiscount: SortOrderType,
    @Query('title') title: string, 
    @Query('discountMax') discountMax: number,
    @Query('discountMin') discountMin: number,
    @Query('isbn') isbn: string,
    @Query('author') author: string,
    @Query('limit') limit: number, 
    @Query('page') pNo: number,
    ){
        return await this.booksService.getBooks(title, isbn, author,discountMin, discountMax, sortByPrice, sortByDiscount, sortByDate, limit, pNo);
    }

    @Get('/:id')
    async getBookById(@Param('id') id: string){
        return await this.booksService.getBookById(new Types.ObjectId(id));
    }
}