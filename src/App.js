
import './App.css';
import Header from "./component/layout/Header.js";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import WebFont from 'webfontloader';
import React from "react";
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js"
import Loader from './component/layout/Loader/Loader.js';
function App() {
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"],
      },
    });
  },[]);
  return (
   <>
      <Router>
      <Header/>
      
      <Routes>
       <Route extact path="/" Component={Home}/>
       <Route extact path="/sad" Component={Loader}/>
       </Routes>
       <Footer/>
      </Router>
     

   </>
  );
}

export default App;
