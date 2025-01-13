import React from "react";
// import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import User from "./Auth";
import Cart from "./Cart";
import HeaderSearch from "./HeaderSearch";
import LoveProducts from "./LoveProducts";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <div className="header container-fluid">
      <div className="top-header row">
        <HeaderSearch />
        <div className="top-center  text-center col-sm-4 pt-3">
          <Link to="/">
            <img
              src="https://bizweb.dktcdn.net/thumb/medium/100/520/624/themes/974135/assets/shop_logo_image.png?1731543625371"
              alt="logo"
              className="logoAuth"
            />
          </Link>
        </div>
        <div className="top-right col-sm-4 pt-3 text-end pe-5">
          <User />
          <LoveProducts />
          <Cart />
        </div>
      </div>
      <HeaderMenu />
    </div>
  );
};

export default Header;
