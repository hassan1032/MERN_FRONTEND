import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import {
  productReducer,
  productDetailsReducer,
} from "./reducer/productReducer";
import { forgotPasswordReducer, profileReducer, userReducer } from "./reducer/userReducer";

import { cartReducer} from "./reducer/cartReducer"

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword:forgotPasswordReducer,
  cart:cartReducer,
});

let initialState = {
  cart:{
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    shippingInfo: localStorage.getItem("shippingInfo")?
    JSON.parse(localStorage.getItem("shipingInfo")):{}
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
