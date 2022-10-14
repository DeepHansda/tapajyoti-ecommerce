import axios from 'axios';

axios.defaults.withCredentials=true
export const API = axios.create({
    baseURL:'https://tapajyoti-ecommerce-backend-deephansda.vercel.app/',
    headers: {
        "Content-Type": 'application/json',
    }
})

