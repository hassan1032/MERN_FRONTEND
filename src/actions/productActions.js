import axios from "axios";

import {
  All_PRODUCT_FAIL,
  All_PRODUCT_REQUEST,
  All_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";

export const getProduct =
  (keyword = "", currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: All_PRODUCT_REQUEST });
      let link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}`;
      const { data = {} } = await axios.get(link);
      console.log('API data =>>', data);
      dispatch({
        type: All_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: All_PRODUCT_FAIL,
        payload: error?.response?.data?.message,
      });
    }
  };

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data = {} } = await axios.get(
      `http://localhost:4000/api/v1/product/${id}`
    );
    console.log(data);
    const { success, p_roduct } = data || {};
    if (success && p_roduct) {
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: p_roduct,
      });
    }
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error?.response?.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
