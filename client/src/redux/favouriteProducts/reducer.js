import { GET_FAVOURITE_ERROR, GET_FAVOURITE_LOADING, GET_FAVOURITE_SUCCESS, REMOVE_FAVOURITE } from "./actions";


const initState = {
    isLoading:false,
    favourite:[],
    isError:false
}

export const favouriteReducer = (state = initState, {type,payload}) => {
    switch(type){
        case GET_FAVOURITE_LOADING:
            return {...state, isLoading:true }
        case GET_FAVOURITE_SUCCESS:
            return {...state, isLoading:false, favourite:payload}
        case GET_FAVOURITE_ERROR:
            return {...state, isLoading:false, isError:true }
        default:
            return state   

    }
}