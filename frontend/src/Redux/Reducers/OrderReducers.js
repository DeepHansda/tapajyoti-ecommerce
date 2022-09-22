import {
  CLEAR_ERRORS,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  MYORDERS_FAIL,
  MYORDERS_REQUEST,
  MYORDERS_SUCCESS,
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
