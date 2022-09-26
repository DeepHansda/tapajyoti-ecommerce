import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  MYORDERS_FAIL,
  MYORDERS_REQUEST,
  MYORDERS_SUCCESS,
} from "../Common/Constants";
import { OrderServices } from "../Common/OrderServices";
export const createOrders = (orderData) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_ORDER_REQUEST,
    });


    const { data } = await OrderServices.createOrder(orderData);
    if (data.success === 1) {
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: data.order,
      });

      return Promise.resolve(data)
    }
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error,
    });

    return Promise.reject(error)
  }
};

export const getMyOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: MYORDERS_REQUEST,
    });

    const { data } = await OrderServices.getMyOrders();
    if (data.success === 1) {
      dispatch({
        type: MYORDERS_SUCCESS,
        payload: data.order,
      });
    }
  } catch (error) {
    dispatch({
      type: MYORDERS_FAIL,
      payload: error,
    });
  }
};
