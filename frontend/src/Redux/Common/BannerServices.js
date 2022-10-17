import {API} from "../Common/API"
export const BannerServices = {
    createBanner:(bannersData)=>{
        return API.post('/createBanner',bannersData)
    },
    readAllBanners:()=>{
        return API.get('/getBanners')
    },
    deleteBanner:(id)=>{
        return API.get(`/deleteBanner/${id}`)
    }    
}