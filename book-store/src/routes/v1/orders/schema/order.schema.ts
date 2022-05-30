import { Prop,Schema } from "@nestjs/mongoose";
// import {  } from "mongoose";
import { CartItem } from "../entities/cart-item.entity";

@Schema()
export class Order {
    @Prop({
        type: [CartItem]
    })
    products: CartItem[];

    @Prop({
        type: Number,
        required: true
    })
    totalPrice: number;

    @Prop({
        type: Boolean,
        default: false
    })
    paid?: boolean;

    @Prop({
        type: String,
    })
    transactionId?: string;
}