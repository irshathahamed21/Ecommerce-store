import { ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS, ADD_TO_CART_ERROR,SET_CART_TOTAL,SET_SHIPPING_ADDRESS,DELETE_FROM_CART_SUCCESS} from "./actionTypes";
import axios from "axios";
import { cartTotalAmount, notify } from "../../utils/extrafunctions";
import { getItem, removeItemSession, setItem } from "../../utils/sessionStorage";



export const addToCartLoading = () => {
    return {
        TYPE:ADD_TO_CART_LOADING
    }
}

export const addToCartSuccess = (payload) => {
    return {
        TYPE:ADD_TO_CART_SUCCESS,payload
    }
}

export const addToCartError = () => {
    return {
        TYPE:ADD_TO_CART_ERROR
    }
}

export const setCartTotal = () => {
    return {
        TYPE:SET_CART_TOTAL
    }

}

export const setShippingAddress = () => {
    return {
        TYPE:SET_SHIPPING_ADDRESS
    }
}

export const deleteFromCartSuccess = () => {
    return {
        TYPE:DELETE_FROM_CART_SUCCESS
    }
}


export const addToCartRequest = (payload,token,toast) => async(dispatch) => {
    try{
        let res = await axios.post("/cart", payload, {headers:{"Authorisation":`Bearer ${token}`}})
        notify(toast, "Product is added to the Cart", "success");
    }
    catch(err){
        console.log(err.response.data);
    }
}

export const getCartDataRequest = (toast,token, couponCode, removeCoupon = false) => async(dispatch) => {
    try {
        dispatch(addToCartLoading())
        let res = await axios.get("/cart")
        dispatch(addToCartSuccess(res.data))

        let coupon = getItem("coupon") || {discountValue:0}

        if(couponCode && !!getItem("coupon")) {
            notify(toast, "Only one coupon is allowed per order", "error" )
        }
        else if(couponCode){
            try {
                coupon = await axios.post("/coupon", {couponCode}, {headers:{"Authorization":`Bearer ${token}`}});
                coupon = coupon.data
                setItem("coupon", coupon)
                notify(toast, "Coupon applied successfully", "success")
            }
            catch(err){
                console.log(err.response.data);
                notify(toast, err.response.data.message, 'error');
            }
        }

        if(removeCoupon){
            await axios.patch("/coupon",  { couponCode: getItem("coupon")?.couponCode }, { headers: { 'Authorization': `Bearer ${token}` } } )
            notify(toast, "Coupon removed successfully", "success")
            coupon = {discountValue:0}
            removeItemSession("coupon")
        }

        const payload = cartTotalAmount(res, coupon.discountValue);
        await axios.post("/amount", payload, { headers: { 'Authorization': `Bearer ${token}` } });
        dispatch(setCartTotal(payload));

    }
    catch(err){
        console.log(err.response.data);
        dispatch(addToCartError())
    }
}


export const deleteFromCartRequest = (id, token, toast) => async(dispatch) => {
    try{
        dispatch(addToCartLoading())
        let res = await axios.delete(`/cart/${id}`)
        dispatch(getCartDataRequest(token))
        notify(toast, "Item removed successfully","success")
    }

    catch(error){
        console.log(error.response.data);
        dispatch(addToCartError())
        notify(toast, "something went wrong","error")
    }
}

export const updateQuantityInCartRequest = (id, payload, token, toast) => async (dispatch) => {
    try {
        dispatch(addToCartLoading());
        await axios.patch(`/cart/${id}`, payload);
        dispatch(getCartDataRequest(token));
        notify(toast, "Quantity updated successfully", "success");
    } catch (err) {
        console.log(err.response.data);
        dispatch(addToCartError());
        notify(toast, "Something went wrong", "error");
    }
}

export const setShippingAddressRequest = (payload, amount, product, token, toast) => async (dispatch) => {
    try {
        let res = await axios.post("/address", payload, { headers: { 'Authorization': `Bearer ${token}` } });
        dispatch(setShippingAddress(res.data));
        notify(toast, "Address added successfully", "success");

        const details = { address: res.data._id, amount, product };
        await axios.post("/orders", details, { headers: { 'Authorization': `Bearer ${token}` } });

        
    } catch (err) {
        console.log(err.response.data);
        notify(toast, "Something went wrong", "error");
    }
}
