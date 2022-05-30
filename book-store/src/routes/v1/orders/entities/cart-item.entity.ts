import { Types } from "mongoose";

export class CartItem {
    productId: Types.ObjectId;

    count: number;

    price: number;

}

