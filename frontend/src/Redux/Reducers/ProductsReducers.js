import {
    ADMIN_PRODUCT_FAIL,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERRORS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
} from "../Common/Constants";

export const productsReducer = (
    state = {
        products: [],
    },
    action
) => {
    const {type,payload} = action;
    switch (type) {
        case ALL_PRODUCT_REQUEST:
        case ADMIN_PRODUCT_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                // data:payload
                products: payload.products,
                filteredProductsCount:payload.filteredProductsCount,
                productsCount: payload.productsCount,
                productPerPage:payload.productPerPage
                
            };
        case ADMIN_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: payload,
            };
        case ALL_PRODUCT_FAIL:
        case ADMIN_PRODUCT_FAIL:
            return {
                loading: false,
                error: payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const productReducer = (
    state = {
        product: [],
    },
    action
) => {
    const {type,payload} = action;

    switch (type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                product: [],
            };
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: payload,
            };
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};