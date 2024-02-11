import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import Product from "./Product.js";
import "./Home.css";
import MetaData from "../layout/MetaData.js";
import { clearErrors, getProduct } from "../../actions/productActions.js";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader.js";
import slider from "../../images/slide.jpg";
import { toast } from "react-toastify";


const Home = () => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(
    (state) => state.products
  );
  


  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch(clearErrors())
    }
    dispatch(getProduct());
    //dispatch(getProductDetails());

  }, [dispatch,error]);
  return (
    <Fragment>
      
      {loading? (
        <Loader/>
      ) : (
        <Fragment>
          <div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-ride="carousel"
>
  <ol className="carousel-indicators">
    <li
      data-target="#carouselExampleIndicators"
      data-slide-to={0}
      className="active"
    />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={slider} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={slider} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={slider} alt="Third slide" />
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

          <MetaData title="HK Mart" />

          <div className="banner">

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Feature Of Products</h2>
          <div className="container" id="container">
            {products && products.map((product) => <Product product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
