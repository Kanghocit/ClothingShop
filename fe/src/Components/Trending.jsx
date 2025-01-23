import React from "react";
import { Link } from "react-router-dom";
import ZoomImage from "./ZoomImage";
import SliderCard from "./Slider/SliderCard";

const Trending = () => {
  const content = [
    {
      text: {
        header: "Vẻ đẹp trường tồn",
        sub: "Sự đối lập trong xu hướng thời trang",
      },
      img: "https://bizweb.dktcdn.net/thumb/grande/100/520/624/themes/974135/assets/home_banner_small_image_d__1.jpg?1731543625371",
    },
    {
      text: {
        header: "Xu hướng thời trang",
        sub: "Khi phong cách retro lên ngôi",
      },
      img: "https://bizweb.dktcdn.net/thumb/grande/100/520/624/themes/974135/assets/home_banner_small_image_d__2.jpg?1731543625371",
    },
  ];
  return (
    <div className="trending pt-5">
      <div className="hc-header row d-flex justify-content-center">
        <div className="col-2 d-flex align-items-center justify-content-end">
          <hr className="w-25" />
        </div>
        <Link to={"/"} className="aboutLink col-2 text-center p-0 m-0">
          Top trending
        </Link>
        <div className="col-2 d-flex align-items-center justify-content-start">
          <hr className="w-25" />
        </div>
        <div className="subAbout text-center">Bộ sưu tập nổi bật nhất tuần</div>
      </div>
      <div className="trending-content container-fluid row pe-0">
        <div className="col-3  ">
          <ZoomImage
            src={
              "https://bizweb.dktcdn.net/thumb/1024x1024/100/520/624/themes/974135/assets/home_product_new_image_d__1.jpg?1731543625371"
            }
          />
        </div>
        <div className="col-6">
          {" "}
          <SliderCard slidesToScroll={1} slidesToShow={3} />
        </div>
        <div className="col-3  ">
          <ZoomImage
            src={
              "https://bizweb.dktcdn.net/thumb/1024x1024/100/520/624/themes/974135/assets/home_product_new_image_d__2.jpg?1731543625371"
            }
          />
        </div>
      </div>
      <div className="trending-footer container-fluid pe-0 pt-5 row">
        {content.map((item, index) => (
          <div className="col-6" key={index}>
            <ZoomImage src={item.img} layer={true} content={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
