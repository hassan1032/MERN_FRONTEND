import "./App.css";
import Header from "./component/layout/Header.js";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useState, useEffect } from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp.js";
import store from "./Store.js";
import { loadUser } from "./actions/userAction.js";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import Protected from "./component/Route/ProtectedRoute.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./constants/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    try {
      const { data } = await axios.get("/api/v1/stripeapikey");
      console.log(data)
      setStripeApiKey(data.stripeApiKey);
    } catch (error) {}
  }

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    if (localStorage.getItem("token")) {
      store.dispatch(loadUser());
      getStripeApiKey();
    }
  }, []);
  return (
    <>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

      <Routes>
        <Route extact path="/" Component={Home} />
        <Route exact path="/product/:id" Component={ProductDetails} />
        <Route exact path="/products" Component={Products} />
        <Route path="/products/:keyword" Component={Products} />
        <Route exact path="/search" Component={Search} />
        <Route exact path="/login" Component={LoginSignUp} />
        <Route exact path="/password/forgot" Component={ForgotPassword} />
        <Route exact path="/cart" Component={Cart} />

        <Route exact path="/password/reset/:token" Component={ResetPassword} />
        <Route
          exact
          path="/account"
          element={<Protected component={Profile} />}
        />
        <Route
          exact
          path="/me/update"
          element={<Protected component={UpdateProfile} />}
        />
        <Route
          exact
          path="/password/update"
          element={<Protected component={UpdatePassword} />}
        />
        <Route
          exact
          path="/Shipping"
          element={<Protected component={Shipping} />}
        />
        <Route
          exact
          path="/order/confirm"
          element={<Protected component={ConfirmOrder} />}
        />

        {/* <Route
          path="/process/payment"
          element={
            <Elements stripe={loadStripe('sk_test_51Oj4qpSAeOPNt4sUeehIBrUfwnlUMdNTp5ca3hpZyLqFJqo65tDs845jbl751w7pLTKuY1HsSJcjlp6hCjK8PPUh0027UzQwDy')}>
              {" "}
              <Payment />
            </Elements>
          }
        /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
