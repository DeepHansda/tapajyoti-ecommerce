import axios from 'axios';

axios.defaults.withCredentials=true
// https://tapajyoti-ecommerce-backend.vercel.app/
export const API = axios.create({
    baseURL:'https://tapajyoti-ecommerce-backend.vercel.app/api',
    headers: {
        "Content-Type": 'application/json',
        "Access-Control-Allow-Origin":'http://localhost:3000',
      //   "Access-Control-Allow-Headers":
      // "Origin, X-Requested-With, Content-Type, Accept",
    }
})

