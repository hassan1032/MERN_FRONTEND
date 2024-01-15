import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productActions";
import { useParams } from "react-router-dom";


const ProductDetails = ({ match })=>{
    const {id}=useParams()
    
    const dispatch = useDispatch();
    const { product, loading, error} = useSelector(
        (state)=> state.productDetails
       
    );
    
    useEffect(()=>{
        if(id){
            dispatch(getProductDetails(id));
        }
    }, [dispatch, id])


  return (
    <Fragment>
      <div className="ProductDetails">
        <div>
          <Carousel>
            {product.image &&
              product.image.map((item, i) => (
                <img
                  className="CarouselImage"
                  key={item.url}
                  src={item.url}
                  alt={`${i} Slide`}
                />
              ))}
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
