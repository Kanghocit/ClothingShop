import React from "react";
import ZoomImage from "./ZoomImage";
import SliderCard from "./Slider/SliderCard";
import { Link } from "react-router-dom";

const HotSale = () => {
  return (
    <div className="container mt-5">
      <div className="hc-header row d-flex justify-content-center mt-5">
        <div className="col-2 d-flex align-items-center justify-content-end">
          <hr className="w-25" />
        </div>
        <Link to={"/"} className="aboutLink col-2 text-center p-0 m-0">
          Hot Sale
        </Link>
        <div className="col-2 d-flex align-items-center justify-content-start">
          <hr className="w-25" />
        </div>
        <div className="subAbout text-center">
          Các sản phẩm được ưa chuộng nhất
        </div>
      </div>
      <div className="row mt-3 d-flex align-items-stretch">
        <div className="hot-sale-img col-6 d-flex align-items-center justify-content-center">
          <ZoomImage
            src={
              "https://bizweb.dktcdn.net/thumb/1024x1024/100/520/624/themes/974135/assets/home_product_stylist_image_d__1.jpg?1731543625371"
            }
          />
        </div>
        <div className="col-6 d-flex align-items-stretch">
          <SliderCard slidesToScroll={1} slidesToShow={2} />
        </div>
      </div>
      <div className="hot-sale-show mt-3">
        <img
          src="https://bizweb.dktcdn.net/100/520/624/themes/974135/assets/home_product_pos_image.png?1731543625371"
          alt=""
        />
      </div>
    </div>
  );
};

export default HotSale;
