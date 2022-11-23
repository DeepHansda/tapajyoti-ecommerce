import { API } from "../Common/API";

// API.defaults.withCredentials=true
const headersOptions = {
  "Access-Control-Allow-Origin":["https://tapajyoti-ecommerce.vercel.app","http://localhost:3000",],
  'Access-Control-Allow-Headers' : 'Origin X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',
}
export const UserServices = {
  signIn: (formData) => {
    return API.post("/login", formData, { withCredentials: true ,headers:headersOptions});
  },
  signUp: (formData) => {
    return API.post("/signUp", formData,  { withCredentials: true,headers:headersOptions });
  },
  getUser: (id) => {
    return API.get(`/getUser/${id}`);
  },
  getUsers: () => {
    return API.get("/getUsers/");
  },
  userDetails: () => {
    return API.get("/userDetails");
  },
  logOut: () => {
    return API.post("/logout");
  },
  deleteUser: (id) => {
    return API.delete(`/deleteUser/${id}`);
  },
};
