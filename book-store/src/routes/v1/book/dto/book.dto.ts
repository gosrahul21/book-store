import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPositive, IsString, IsUrl, Max, Min } from "class-validator";
import { BooksCategory } from "src/common/config/constants/category.constant";


export class BookDto {
    @ApiProperty({
        type: String
    })    
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({
        type: Number
    })    
    @Min(0)
    @IsNumber()
    price: number;

    @ApiProperty({
        type: String,
        description: 'name of the author'
    })
    @IsString()
    @IsNotEmpty()    
    author: string;

    @ApiProperty({
        type: String,
        description: 'name of the author'
    })
    @IsString()
    @IsNotEmpty()    
    @IsEnum(BooksCategory)
    category: BooksCategory;

    @ApiProperty({
        type: Number
    })    
    @IsInt()
    @Min(0)
    stocks: number;

    @ApiProperty({
        type: Number,
        description: 'alway less than or equal to 5'
    })   
    @Min(0)
    @Max(5)
    @IsInt()
    ratings: number=0;

    @ApiProperty({
        type: Number
    })
    @IsPositive()
    noOfPages: number;

    @ApiProperty({
        type: String
    }) 
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({
        type: String
    })
    @IsUrl()
    pic?: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    @IsNotEmpty()
    isbn: string;

    @ApiProperty({
        type: Number
    })
    @Min(0)
    @Max(100)
    @IsOptional()
    discount?:number;
}