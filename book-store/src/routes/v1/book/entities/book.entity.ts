import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { Types } from "mongoose";
import { BooksCategory } from "src/common/config/constants/category.constant";


export class BookEntity {

    @ApiProperty({
        type: Types.ObjectId
    })
    _id?: Types.ObjectId;

    @ApiProperty({
        type: String
    })    
    title: string;

    @ApiProperty({
        type: Number
    })    
    price: number;

    @ApiProperty({
        type: String,
        description: 'name of the author'
    })    
    author: string;

    @ApiProperty({
        type: String,
        enum: BooksCategory,
        description: 'Category of the book'
    })    
    category: BooksCategory;

    @ApiProperty({
        type: Number
    })    
    stocks: number;

    @ApiProperty({
        type: Number,
        description: 'alway less than or equal to 5'
    })    
    ratings: number;

    @ApiProperty({
        type: Number,
    })
    noOfpages?: number;

    @ApiProperty({
        type: String
    })
    description?: string;

    @ApiProperty({
        type: String
    })
    pic?:string;

    @ApiProperty({
        type: String
    })
    isbn: string;

    // @ApiProperty({
    //     type: String
    // })
    // language: string;
}

