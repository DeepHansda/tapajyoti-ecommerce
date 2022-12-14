import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  GETALL_ORDERS_FAIL,
  GETALL_ORDERS_REQUEST,
  GETALL_ORDERS_SUCCESSS,
  MYORDERS_FAIL,
  MYORDERS_REQUEST,
  MYORDERS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  UPDATE_ORDER_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  CLEAR_ERRORS,
  UPDATE_ORDER_RESET,
  DELETE_ORDER_RESET
} from "../Common/Constants";

export const newOrderReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        order: payload,
      };
    case CREATE_ORDER_FAIL:
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

export const myOrdersReducer = (state = { orders: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case MYORDERS_REQUEST:
      return {
        loading: true,
      };
    case MYORDERS_SUCCESS:
      return {
        loading: false,
        orders: payload,
      };
    case MYORDERS_FAIL:
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

export const orderDetailsReducer = (state = { order: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_DETAILS_REQUEST:
      return {
        loading: true,
      };

    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: payload,
      };

    case ORDER_DETAILS_FAIL:
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


export const allOrdersReducer = (state = { orders: [] }, action) => {
  const {type, payload} = action;
  switch (type) {
    case GETALL_ORDERS_REQUEST:
      return {
        loading: true,
      };

    case GETALL_ORDERS_SUCCESSS:
      return {
        loading: false,
        orders: payload,
      };

    case GETALL_ORDERS_FAIL:
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


export const orderReducer = (state = {}, action) => {
  const {type, payload} = action;
  switch (type) {
    case UPDATE_ORDER_REQUEST:
    case DELETE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: payload,
      };

    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: payload,
      };

    case UPDATE_ORDER_FAIL:
    case DELETE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case UPDATE_ORDER_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case DELETE_ORDER_RESET:
      return {
        ...state,
        isDeleted: false,
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