import {
    API
} from './API'
export const OrderServices = {
    createOrder: (data) => {
        return API.post('/createOrder', data)
    },
    getMyOrders: () => {
        return API.get('/getOrders/me')
    },
    getAllOrders: () => {
        return API.get('/getOrders')
    }
}