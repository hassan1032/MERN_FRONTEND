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
import { profileReducer, userReducer } from "./reducer/userReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
