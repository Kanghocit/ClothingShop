import React from "react";
import SliderCard from "./Slider/SliderCard";
import { Link } from "react-router-dom";

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
        <div className="subAbout text-center">Top các sản phẩm bán chạy nhất tuần</div>
      </div>
      <div className="container-fluid mt-5">
        <SliderCard slidesToScroll={1} slidesToShow={5} className="mi"/>
      </div>
    </>
  );
};

export default BestSeller;
