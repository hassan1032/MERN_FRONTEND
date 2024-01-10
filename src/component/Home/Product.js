 import React from 'react'
 import { Link } from "react-router-dom";
 import ReactStars from "react-rating-stars-component"

 const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  size: window.innerWidth < 600  ? 20 : 25,
  value: 2.5,
  isHalf: true,
 }
 
 const Product = ( {product}) => {
   return (
    <>
     <Link className='productCard' to={product}>
      <img src={product.img}/>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <div>
        <ReactStars {...options}/>
        <span>(256 Reviews)</span>
        {/* <span>{products.price}</span> */}
      </div>
      
     </Link>
     </>
   )
 }
 
 export default Product
 
