import {combineReducers} from 'redux'
import { cartReducers } from './CartReducers'
import { myOrdersReducer, newOrderReducer } from './OrderReducers'
import { paymentReducers } from './PaymentReducers'
import {productReducer,productsReducer} from './ProductsReducers'
import { userReducer } from './UserReducers'
import { wishListReducer } from './WishListReducers'
export const RootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    product: productReducer,
    wishList: wishListReducer,
    cart: cartReducers,
    payment:paymentReducers,
    order:newOrderReducer,
    myOrders: myOrdersReducer
})  

