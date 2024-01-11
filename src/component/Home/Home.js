import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import Product from "./Product.js";
import "./Home.css";
import MetaData from "../layout/MetaData.js";
import { getProduct } from "../../actions/productActions.js";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const { Loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <Fragment>
      {Loading ? (
        "loading"
      ) : (
        <Fragment>
          <MetaData title="HK Mart" />

          <div className="banner">
            <p>Welcome To HK mart</p>
            <h1>Find The Amazing Products Below</h1>
            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Feature Of Products</h2>
          <div className="container" id="container">
            {products && products.map((pro) => <Product product={pro} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
