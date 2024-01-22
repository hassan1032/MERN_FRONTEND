import React, { Fragment, useEffect } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productActions";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/Product";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error, productCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {}, [dispatch]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productsHeding">Products</h2>
          <div className="products">
          {products &&
          products.map((product)=>(
            <ProductCard key={product._id} product={product}/>
          ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
