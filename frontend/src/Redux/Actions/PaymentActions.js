import { API } from "../Common/API"
import { PAYMENT_FAIL, PAYMENT_REQUEST, PAYMENT_SUCCESS } from "../Common/Constants"

export const paymentProcess = (paymentData) => async (dispatch) => {
    try{
        const res = await API.post('/payment',paymentData)
        if(res.status === 200){
            dispatch({
                type:PAYMENT_REQUEST,
                payload:res.data
            })
        }
    }
    catch(error){
        dispatch({
            type:PAYMENT_FAIL,
            payload:error
        })
    }
}

const paymentVerify = (paymentData) => async (dispatch)=>{
    try{
        const {data} = await API.post('/paymentVerify',paymentData)
        if(data.success===1){
            dispatch({
                type:PAYMENT_SUCCESS,
                payload:data
            })

            return new Promise.resolve(data)
        }
    }

    catch(error){
        dispatch({
            type:PAYMENT_FAIL,
            payload:error
        })

        return new Promise.reject(error)

    }
}