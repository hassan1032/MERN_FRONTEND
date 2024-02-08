import { ADD_TO_CART } from "../constants/cartConstants";
import axios from "axios"


export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:4000/api/v1/product/${id}`);
   console.log("data>>>>",data.p_roduct)
    dispatch({
      type: ADD_TO_CART,
      payload: { 
        product: data.p_roduct._id,
        name: data.p_roduct.name,
        price: data.p_roduct.price,
        image: data.p_roduct.image[0].url,
        stock: data.p_roduct.Stock,
        quantity,
      },
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };