import { GET_ONE_DATA_ERROR, GET_ONE_DATA_LOADING, GET_ONE_DATA_ERROR, GET_ONE_DATA_SUCCESS } from "./actionTypes";


const initState = {
    isLoading:false,
    product:{},
    isError:false,
}


export const oneProductReducer = (state = initState, {type,payload}) => {

    switch(type){
        case GET_ONE_DATA_LOADING:
            return {
                ...state,
                isLoading:true,
                
            }
        case GET_ONE_DATA_SUCCESS:
            return {
                ...state,
                isLoading:false,
                product:payload
                
            }   
        case GET_ONE_DATA_ERROR:
            return {
                ...state,
                isError:true
                
            } 
        default:
            return state
               
    }

}