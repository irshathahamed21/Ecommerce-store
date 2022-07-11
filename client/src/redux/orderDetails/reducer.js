import { GET_ORDER_DATA_ERROR, GET_ORDER_DATA_LOADING, GET_ORDER_DATA_SUCCESS } from "./actionTypes";

const initState = {
    isLoading:false,
    order:[],
    isError:false

}

export const orderReducer = (state = initState, {type,payload}) => {
    switch(type) {
        case GET_ORDER_DATA_LOADING:
            return {...state, isLoading:true}
        case GET_ORDER_DATA_SUCCESS:
            return {...state, order:payload, isLoading:false}
        case GET_ORDER_DATA_ERROR:
            return {...state, isError:false}
        default:
            return state                
    }
}

