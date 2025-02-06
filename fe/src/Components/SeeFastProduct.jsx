import { Button, Dialog, DialogContent, IconButton } from "@mui/material";
import React, { useState } from "react";
import "../css/App.css";
import ImageSlider from "./Slider";
import QuantityCounter from "./Header/QuantityCounter";

const SeeFastProduct = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const imgListSrc = [
    "https://bizweb.dktcdn.net/100/520/624/products/4cfd72dd3496e4c8fc321089865c8dc3-fc6c0c62cc97407694f9e1779733e094-4708e838827f483caf158848465c1d33.jpg?v=1720423442500",
    "https://bizweb.dktcdn.net/100/520/624/products/adf9e2b08a5a6215605d38e8d56d8502-b8884d5f0ae8497b8c48fc9be0adf717-51eb4f9b44f344939e2e9d46cb971d3f.jpg?v=1720423442500",
    "https://bizweb.dktcdn.net/100/520/624/products/93e8ecac1ba5ab545446f0081d69ec89-adb49cfd4f934449aee9d661c830b0f0-1e669fbccfa04cf592ee765c987a800f.jpg?v=1720423442500",
    "https://bizweb.dktcdn.net/thumb/large/100/520/624/products/4c3b0df54321e4e9375151e390e815d1.jpg?v=1720423442500",
  ];

  return (
    <>
      <div onClick={handleClick}>Xem nhanh</div>
      <Dialog open={open} onClose={handleClick} maxWidth="md" fullWidth>
        <IconButton
          aria-label="close"
          onClick={handleClick}
          sx={() => ({
            position: "absolute",
            right: 8,
            top: 8,
            "&:hover": {
              backgroundColor: "transparent", 
            },
          })}
        >
          &times;
        </IconButton>

        <div className="see-fast-header align-items-end">
          <h3 className="product-title">
            <b>CỔ CHỮ U TAY ÁO XÁM</b>
          </h3>
          <ul className="product-details">
            <li className="ms-3">
              <b>Mã sản phẩm:</b> Đang cập nhật
            </li>
            <li>
              <b>Barcode:</b> Đang cập nhật
            </li>
            <li className="ms-3">
              <b>Thương hiệu:</b> CHACOAL
            </li>
            <li>
              <b>Dòng sản phẩm:</b> Áo
            </li>
          </ul>
        </div>

        <div className="see-fast-product row p-2">
          <div className="col-4 slider-see-fast">
            <ImageSlider
              slidesToShow={1}
              slidesToScroll={1}
              imgListSrc={imgListSrc}
            />
          </div>

          <div className="product-info col-8">
            <hr />
            <div className="product-price">
              <span className="old-price">2.533.000đ</span> 2.033.000đ{" "}
              <span className="discount-product-span">Tiết kiệm 20%</span>
            </div>
            <hr />
            <div className="product-info row">
              <div className="col-3">Title</div>
              <div className="product-info-btns col-9 row">
                <div className="product-info-btn btn col-6">Xanh lá</div>
                <div className="product-info-btn btn col-6 ms-1">
                  Xanh dương
                </div>
              </div>
              <div className="col-3 mt-2">Size</div>
              <div className="product-info-btns col-9 row mt-2">
                <div className="product-info-btn btn col-6">S</div>
                <div className="product-info-btn btn col-6 ms-1">M</div>
                <div className="product-info-btn btn col-6 ms-1">L</div>
                <div className="product-info-btn btn col-6 ms-1">XL</div>
              </div>
              <div className="col-3 mt-2">Số Lượng</div>
              <div className="col-9 mt-2">
                <QuantityCounter />
              </div>
            </div>

            <div className="row mt-2">
              <div className="add-to-cart col-5 ms-2 p-1">
                <p className="mb-0">
                  <b>THÊM VÀO GIỎ</b>
                </p>
                <span>Chọn ngay sản phẩm bạn yêu thích</span>
              </div>
              <div className="see-more col-5 ms-3 p-1">
                <p className="mb-0">
                  <b>XEM CHI TIẾT</b>
                </p>
                <span>Tổng quan về sản phẩm</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5"></div>
      </Dialog>
    </>
  );
};

export default SeeFastProduct;
