import React, { Fragment } from 'react'
import { CgMouse} from "react-icons/cg";
import Product from "./Product.js"
import "./Home.css"
import MetaData from '../layout/MetaData.js';

const product ={
    name:"Blue Tshirt",
    images:[{url: "https://modone.com/eng_pl_Mens-plain-t-shirt-S1323-light-blue-15421_1.jpg"}],
    price: "₹300",
    _id:"Hassan khan",
};
const Home = () => {
  return (
     <Fragment>

      <MetaData title="HK Mart"/>

     <div className='banner'>
        <p>Welcome To HK mart</p>
        <h1>Find The Amazing Products Below</h1>
        <a href="#container">
        <button>
            Scroll <CgMouse/>
        </button>
        </a>
     </div>

       <h2 className='homeHeading'>Feature Of Products</h2>
       <div className='container' id="container">
         {/* <Product product={product}/> */}
         { <Product product={product}/>}
         { <Product product={product}/>}
         { <Product product={product}/>}
         { <Product product={product}/>}
         { <Product product={product}/>}
         { <Product product={product}/>}
         { <Product product={product}/>}
         { <Product product={product}/>}
         { <Product product={product}/>}


       </div>
  </Fragment>
  )
}

export default Home
