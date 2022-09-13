import {API} from "../Common/API"
export const UserServices = {
    signIn:(formData)=>{
        return API.post('/login',formData)
    },
    signUp:(formData)=>{
        return API.post('/signUp',formData)
    },
    getUser:(id)=>{
        return API.get(`/getUser/${id}`)
    },
    getUsers:()=>{
        return API.get('/getUsers/')
    },
    userDetails:()=>{
        return API.get('/userDetails')
    },
    logOut:()=>{
        return API.post('/logout')
    }
}