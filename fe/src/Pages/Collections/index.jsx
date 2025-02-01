import React from "react";
import "../../css/Custom.css";
import {
  Breadcrumbs,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Choice from "../../Components/Choice";
const Collections = () => {
  return (
    <div className="collections mt-6 ">
      <div role="presentation" className="collection-container-header py-2">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to={"/"}>
              Trang chủ
            </Link>
            <Typography className="address">Dresses</Typography>
          </Breadcrumbs>
        </div>
      </div>
      <div className="collection-banner container">
        <img
          src="https://bizweb.dktcdn.net/thumb/2048x2048/100/520/624/collections/h3bfbc9d6abb74530820bd8a71dccc8d-07aaeb016e4a475e97daf80cb8459361.jpg?v=1719827234410"
          alt=""
          className="w-100 my-2"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="sidebar col-3">
            <Choice/>
          </div>
          <div className="content-right col-9"></div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
