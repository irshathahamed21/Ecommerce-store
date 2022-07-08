import axios from "axios";
import { GET_ONE_DATA_ERROR, GET_ONE_DATA_LOADING, GET_ONE_DATA_ERROR, GET_ONE_DATA_SUCCESS } from "./actionTypes";


export const getOneDataLoading = () => {
    return {
        type:GET_ONE_DATA_LOADING
    }

}

export const getOneDataSuccess = (payload) => {
    return {
        type:GET_ONE_DATA_SUCCESS, payload
    }

}

export const getOneDataError = () => {
    return {
        type:GET_ONE_DATA_ERROR
    }
}

export const getOneDataRequest = (id) => async(dispatch) => {
    try {

        dispatch(getOneDataError())
        let res = await axios.get(`/product/${id}`)
        dispatch(getOneDataSuccess(res.data))

    }
    catch(error){
        console.log(error.response.data);
        dispatch(getOneDataError())
    }
}