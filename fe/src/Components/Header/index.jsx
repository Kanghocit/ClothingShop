import React from "react";
// import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";
import User from "./Auth";
import { Badge } from "@mui/material";
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
            />
          </Link>
        </div>
        <div className="top-right col-sm-4 pt-3 text-end">
          <User />
          <Badge badgeContent={4} color="primary" className="badgeColor mx-2">
            <CiHeart className=" btnSearch " />
          </Badge>
          <Badge badgeContent={4} color="primary" className="badgeColor mx-2">
            <IoBagOutline className="btnSearch" />
          </Badge>
        </div>
      </div>
      <div className="bottom-header">haha</div>
    </div>
  );
};

export default Header;
