
import { getItemFromLocal } from "../../utils/localStorage";
import { GET_TOKEN_SUCCESS, REMOVE_TOKEN_SUCCESS } from "./actionTypes";



let initState = {
    token:getItemFromLocal("token") || false, 
    user:getItemFromLocal("user") || {}
};

export const authReducer = (state = initState, {type,payload}) => {

    switch(type){
        case GET_TOKEN_SUCCESS:
            return {
                ...state, 
                token:payload.token,
                user:payload.user
            }
        case REMOVE_TOKEN_SUCCESS:
            return {
                ...state, user:{}, token:false
            }  
        default:
            return state;      
    }

};


