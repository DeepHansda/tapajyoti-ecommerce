import axios from "axios";

axios.defaults.withCredentials=true
// https://tapajyoti-ecommerce-backend.vercel.app
// http://localhost:3400/api
export const API = axios.create({
  baseURL: "https://tapajyoti-ecommerce-backend.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": ["https://tapajyoti-ecommerce.vercel.app","http://localhost:3000"],
    'Access-Control-Allow-Headers' : 'Origin X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept Accept-Encoding',
    },
});
