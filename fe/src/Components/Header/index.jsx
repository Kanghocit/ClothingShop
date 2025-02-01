import React, { useEffect, useState } from "react";
// import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import User from "./Auth";
import Cart from "./Cart";
import HeaderSearch from "./HeaderSearch";
import LoveProducts from "./LoveProducts";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const hideThreshold = 10; 

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop && currentScroll > hideThreshold) {
        setIsHidden(true); 
      } else {
        setIsHidden(false); 
      }

      setLastScrollTop(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);
  return (
    <div className={`header ${isHidden ? "hidden" : ""} container-fluid`}>
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
