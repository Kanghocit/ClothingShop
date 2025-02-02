  import { Breadcrumbs, Typography } from "@mui/material";
  import React from "react";
  import { Link } from "react-router-dom";
  import Choice from "../../Components/Choice";
  import "../../css/Custom.css";
  import SelectForm from "../../Components/SelectForm";
  import SliderCard from "../../Components/Slider/SliderCard";
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
            <div className="sidebar col-3 ">
              <Choice />
            </div>
            <div className="content-right col-9">
              <div className="selectOption d-flex align-content-end justify-content-end">
                <p className="me-1 my-auto">Sắp xếp theo</p>
                <SelectForm />
              </div>
              <div className="collection-content">
                <div className="contentName">Cocktail Dresses</div>
                <div className="contentDetail">
                  <p>
                    Những mẫu váy tinh tế, thanh lịch, thường may bằng các chất
                    liệu cao cấp như lụa, ren, chiffon hoặc nhung. Chiều dài váy
                    khoảng trên đầu gối đến dưới gối, tạo vẻ quý phái, sang trọng.
                    Các thiết kế có nhiều kiểu dáng khác nhau như cổ chéo, cổ V,
                    tay lửng hoặc không tay. Các màu sắc phổ biến bao gồm đen, đỏ,
                    xanh đen, tím than và các gam màu trung tính tinh tế. Những
                    chiếc váy này thường được mặc tới các bữa tiệc, sự kiện chính
                    thức hoặc dạ tiệc.
                  </p>
                </div>
                <div className="mt-2">
                  <SliderCard slidesToShow={4} slidesToScroll={1} />
                </div>
                <div className="mt-2">
                  <SliderCard slidesToShow={4} slidesToScroll={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Collections;
