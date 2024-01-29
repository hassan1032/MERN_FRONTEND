
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/userConstants";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      // console.log(data.user)
      `http://localhost:4000/api/v1/login`,
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    console.log(data.user)
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Clearing Error
export const clearErrors = ()=> async(dispatch)=>{
    dispatch({ type: CLEAR_ERRORS})
}