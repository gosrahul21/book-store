import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { BooksCategory } from "src/common/config/constants/category.constant";

@Schema({timestamps:true})
export class Book {
    @Prop({
        type: String,
        required: true
    })
    title: string;

    @Prop({
        type: Number,
        required: true
    })
    price: number;

    @Prop({
        type: String,
        required: true
    })
    author: string;

    @Prop({
        type: String,
        enum: BooksCategory
    })
    category: BooksCategory;
    
    @Prop({
        type: Number
    })
    stocks: number;

    @Prop({
        type: Number
    })
    ratings: number;

    @Prop({
        type: Number
    })
    noOfpages?: number;

    @Prop({
        type: String
    })
    description: string;

    @Prop({
        type: String
    })
    pic?:string;

    @Prop({
        type: String,
        unique: true,
        index: true
    })
    isbn: string;

    @Prop({
        type: Number,
        default:0
    })
    discount: number;

    // @Prop({
    //     type: String,
    //     required: true
    // })
    // language: string;
}

export type BookDocument = Book & Document;

export const BookSchema = SchemaFactory.createForClass(Book).set(
  'versionKey',
  false,
);

