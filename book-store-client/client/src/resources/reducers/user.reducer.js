import { SIGNIN, LOGOUT,  } from "../actions/constants/user.constant";
const initialState = null;

export default  (state = initialState, action)=>{
    switch(action.type){
        case SIGNIN:
            return action.payload;
        case LOGOUT:
            return null;
        default:
            return state;
    }
}