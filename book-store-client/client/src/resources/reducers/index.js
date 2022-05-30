import { combineReducers } from "redux";
import Books from "./books.reducer";
import orderReducer from "./order.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
    user: userReducer,
    orders: orderReducer,
    books: Books
})