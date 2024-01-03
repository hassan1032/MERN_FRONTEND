import React from "react";
import { CiSearch } from "react-icons/ci";
import { ReactNavbar } from "overlay-navbar";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
// import logo from "../../../images/logo.png";
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
        navColor2="white"
        navColor1="white"
        profileIconColor="black"
        searchIconColor="black"
        cartIconColor="black"
        cartIconTransition="0.5"
        profileIconTransition="0.5"
        profileIconColorHover="red"
        searchIconMargin="0"
        cartIconMargin="0"
        profileIconMargin="0"
        searchIconUrl="/search"
        profileIconUrl="/account"
        cartIconUrl="/cart"
        searchIconSize="2vmax"
        cartIconSize="2vmax"
        profileIconSize="2.5vmax"
        searchIconColorHover="red"
        cartIconColorHover="red"
        searchIconAnimationTime="2"
        cartIconAnimationTime="3"
        profileIconAnimationTime="4"
        link1Text="Home"
        link2Text="About"
        link3Text="Contact"
        link4Text="Product"
        link1Family="cursive"
        ink1ColorHover="red"
        ink2ColorHover="red"
        ink3ColorHover="red"
        ink4ColorHover="red"

        
      />
    </>
  );
};

export default Header;
