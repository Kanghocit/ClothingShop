import React from "react";
import SliderCard from "./Slider/SliderCard";
import { Link } from "react-router-dom";
import ZoomImage from "./ZoomImage";

const BestSeller = () => {
  return (
    <>
      <div className="hc-header row d-flex justify-content-center mt-5">
        <div className="col-2 d-flex align-items-center justify-content-end">
          <hr className="w-25" />
        </div>
        <Link to={"/"} className="aboutLink col-2 text-center p-0 m-0">
          Best Seller
        </Link>
        <div className="col-2 d-flex align-items-center justify-content-start">
          <hr className="w-25" />
        </div>
        <div className="subAbout text-center">
          Top các sản phẩm bán chạy nhất tuần
        </div>
      </div>
      <div className="container-fluid mt-5">
        <SliderCard slidesToScroll={1} slidesToShow={5} className="mi" />
      </div>
      <div className="mt-5">
        <ZoomImage
          src={
            "https://bizweb.dktcdn.net/thumb/2048x2048/100/520/624/themes/974135/assets/home_banner_second_lg_image_d.jpg?1731543625371"
          }
        />
      </div>
    </>
  );
};

export default BestSeller;
