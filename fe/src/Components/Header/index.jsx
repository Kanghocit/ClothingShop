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
  const [scrollCount, setScrollCount] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop) {
        // Người dùng cuộn xuống
        setScrollCount((prev) => prev + 1);
        if (scrollCount >= 2) {
          setIsHidden(true); // Ẩn header nếu cuộn xuống 2 lần
        }
      } else {
        // Người dùng cuộn lên
        setScrollCount(0); // Reset đếm cuộn xuống
        setIsHidden(false); // Hiện header ngay lập tức
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // Không để giá trị âm
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Dọn dẹp sự kiện để tránh rò rỉ bộ nhớ
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, scrollCount]);
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
