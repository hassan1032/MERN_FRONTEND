
import './App.css';
import Header from "./component/layout/Header.js";
import { BrowserRouter as Router} from "react-router-dom";
import WebFont from 'webfontloader';
import React from "react";
import Footer from "./component/layout/Footer/Footer.js"
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
      <h1>sjifduf</h1>
      <h1>sjifduf</h1>
      <h1>sjifduf</h1>
      <h1>sjifduf</h1>
      <h1>sjifduf</h1>
      <Footer/>
      </Router>

   </>
  );
}

export default App;
