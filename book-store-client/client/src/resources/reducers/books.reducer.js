import { GET_BOOKS, GET_MIN_40_OFF, GET_NEW_ARRIVAL, GET_UPTO_45 } from "../actions/constants/book.constant.";


export default function Books (state={newArrival:null, min40Off: null, upTo45:null}, action ){
    switch(action.type){
        case GET_BOOKS:
            return action.payload;
        
        case GET_NEW_ARRIVAL:
            return {
                ...state,
                newArrival: action.payload
            }
        case GET_MIN_40_OFF:
            return {
                ...state,
                min40Off: action.payload
            }
        case GET_UPTO_45:
            return {
                ...state, 
                upTo45: action.payload
            }
        default: 
            return state;
    }
}