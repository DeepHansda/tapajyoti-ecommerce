import { BannerServices } from "../Common/BannerServices"
import { CREATE_BANNER_FAIL, CREATE_BANNER_REQUEST, CREATE_BANNER_SUCCESS, GETALL_BANNERS_FAIL, GETALL_BANNERS_REQUEST, GETALL_BANNERS_SUCCESSS } from "../Common/Constants"

export const createBanners = (bannersData) => async (dispatch)=>{
    try{
        dispatch({
            type: CREATE_BANNER_REQUEST
        })

        const {data} = await BannerServices.createBanner(bannersData)

        if(data.success==1){
            dispatch({
                type: CREATE_BANNER_SUCCESS,
                payload:data.banners
            })

            return Promise.resolve(data)
        }
    }
    catch(err){
        dispatch({
            type:CREATE_BANNER_FAIL,
            payload:err.response.data
        })

        return Promise.reject(err).response.data
    }
}

export const getBanners = () => async (dispatch)=>{
    try{
        dispatch({
            type: GETALL_BANNERS_REQUEST
        })

        const {data} = await BannerServices.readAllBanners()

        if(data.success==1){
            dispatch({
                type: GETALL_BANNERS_SUCCESSS ,
                payload:data.banners
            })

        }
    }
    catch(err){
        dispatch({
            type:GETALL_BANNERS_FAIL,
            payload:err.response.data
        })

    }
}