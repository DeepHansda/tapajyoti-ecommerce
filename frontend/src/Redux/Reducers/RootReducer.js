import {combineReducers} from 'redux'
import { cartReducers } from './CartReducers'
import {productReducer,productsReducer} from './ProductsReducers'
import { userReducer } from './UserReducers'
import { wishListReducer } from './WishListReducers'
export const RootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    product: productReducer,
    wishList: wishListReducer,
    cart: cartReducers
})  

