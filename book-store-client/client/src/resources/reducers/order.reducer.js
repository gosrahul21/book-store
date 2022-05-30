import { CANCEL_ORDER, CREATE_ORDER } from "../actions/constants/order.constant"


export default (state=null, action) => {
    switch(action.type){
        case CREATE_ORDER:
            return action.payload;
        case CANCEL_ORDER:
            return action.payload
        default: 
            return null
    }
}