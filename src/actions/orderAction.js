import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
   
    CLEAR_ERRORS,
  } from "../constants/orderConstants";

  
  import axios from "axios";

  // create Order

  export const createOrder = (order) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_ORDER_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("http://localhost:4000/api/v1/order/new", order, config);
       console.log("New Order Data",data)
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_ORDER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // My Order 
  export const myOrders = () => async (dispatch) => {
    try {
      dispatch({ type: MY_ORDERS_REQUEST });
  
      const { data } = await axios.get("http://localhost:4000/api/v1/orders/me", {headers: {
        Authorization: "Bearer "+ localStorage.getItem("token")
      }});
      console.log("data is ",data)
  
      dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders });
      console.log("data is ",data)
    } catch (error) {
      dispatch({
        type: MY_ORDERS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
      
  
    
  // Clearing Errors

  export const clearErrors = () =>async(dispatch)=>{
    dispatch({ type: CLEAR_ERRORS});
  };
  