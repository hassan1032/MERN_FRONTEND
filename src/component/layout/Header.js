import React from "react";
import { CiSearch } from "react-icons/ci";
import { ReactNavbar } from "overlay-navbar";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <>
      <ReactNavbar
        logo={logo}
        cartIcon={true}
        CartIconElement={CiShoppingCart}
        profileIcon={true}
        ProfileIconElement={CiUser}
        searchIcon={true}
        SearchIconElement={CiSearch}
        burgerColorHover="#0066FF"
        logoWidth="20vmax"
        navColor1="white"
        logoHoverSize="3px"
        logoHoverColor="#eb4034"
        link1Text="Home"
        link2Text="Products"
        link3Text="Contact"
        link4Text="About"
        link1Url="/"
        link2Url="/products"
        link3Url="/contact"
        link4Url="/about"
        link1Size="1.3vmax"
        link1Color="rgba(35, 35, 35,0.8)"
        nav1justifyContent="flex-end"
        nav2justifyContent="flex-end"
        nav3justifyContent="flex-start"
        nav4justifyContent="flex-start"
        link1ColorHover="#eb4034"
        link1Margin="1vmax"
        profileIconUrl="/login"
        profileIconColor="rgba(35, 35, 35,0.8)"
        searchIconColor="rgba(35, 35, 35,0.8)"
        cartIconColor="rgba(35, 35, 35,0.8)"
        profileIconColorHover="#eb4034"
        searchIconColorHover="#eb4034"
        cartIconColorHover="#eb4034"
        cartIconMargin="1vmax"
        link1Family="cursive"
        logoTransition="3"
        logoAnimationTime="4"
        
        
       
      />
    </>
  );
};

export default Header;
