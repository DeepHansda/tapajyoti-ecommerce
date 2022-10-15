import axios from 'axios';

axios.defaults.withCredentials=true
export const API = axios.create({
    baseURL:'http://localhost:3400/api',
    headers: {
        "Content-Type": 'application/json',
      //   "Access-Control-Allow-Origin":'*',
      //   "Access-Control-Allow-Headers":
      // "Origin, X-Requested-With, Content-Type, Accept",
    }
})

