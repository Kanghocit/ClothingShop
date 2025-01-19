import React from "react";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import SubCard from "./subCard";

const Card = () => {
  const [value, setValue] = useState(4);
  const [selectedImage, setSelectedImage] = useState(
    "https://bizweb.dktcdn.net/thumb/large/100/520/624/products/4c3b0df54321e4e9375151e390e815d1.jpg?v=1720423442500"
  );
  const handleImageSelection = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  return (
    <div className="card col-12 col-md-3 p-0 mx-1">
      <img src={selectedImage} alt="" className="cardImg mb-1" />
      <div className="brand row mb-1">
        <div className="brand-name col-6 ">CHACOAL</div>
        <Rating
          value={value}
          readOnly
          className="rate d-flex justify-content-center align-items-center"
        />
      </div>
      <div className="card-name mb-1">CỔ CHỮ U TAY ÁO XÁM</div>
      <div className="card-price mb-1">
        1.015.000đ <span>1.279.000đ</span>
      </div>
      <SubCard imgSend={handleImageSelection} />
    </div>
  );
};

export default Card;
