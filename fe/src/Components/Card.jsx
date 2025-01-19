import React from "react";
import Rating from "@mui/material/Rating";
import { useState } from "react";

const Card = () => {
  const [value, setValue] = useState(2);
  return (
    <div className="cards row">
      <div className="card col-3 p-0">
        <img
          src="https://bizweb.dktcdn.net/thumb/large/100/520/624/products/4c3b0df54321e4e9375151e390e815d1.jpg?v=1720423442500"
          alt=""
          className="cardImg"
        />
        <div className="brand row">
          <div className="brand-name col-6 ">CHACOAL</div>
          <Rating value={value} readOnly className="rate d-flex justify-content-center align-items-center" />
        </div>
        <div className="card-name">
            CỔ CHỮ U TAY ÁO XÁM
        </div>
        <div className="card-price">
            1.015.000đ <span>1.279.000đ</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
