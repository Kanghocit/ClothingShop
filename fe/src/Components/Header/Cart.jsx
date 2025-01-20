import React, { useEffect, useState } from "react";
import { Badge, Drawer, IconButton } from "@mui/material";
import { IoBagOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import QuantityCounter from "./QuantityCounter";

const Cart = () => {
  const money = 50000000;
  const moneyUsed = 1500000;
  const [discount, setDiscount] = useState(0);
  const [open, setOpen] = useState(false);
  const [openNote, setOpenNote] = useState(false);

  const handleAddNoteClick = () => {
    setOpenNote(true); 
  };

  const handleSaveNoteClick = () => {
    setOpenNote(false); 
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const dis = Math.round((moneyUsed / money) * 100);
    setDiscount(dis);
  }, [moneyUsed]);

  return (
    <>
      {/* Icon giỏ hàng */}
      <Badge
        badgeContent={4}
        color="primary"
        className="badgeColor mx-2"
        onClick={toggleDrawer(true)}
      >
        <IoBagOutline className="btnSearch" />
      </Badge>

      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        <div className="container containerCart">
          <div className="cartTop row">
            <div className="col-10">
              <div className="name pt-1 fw-bold">GIỎ HÀNG</div>
              {/* Thanh tiến trình */}
              <div className="linearProgress">
                <div
                  className="linearProgressBar"
                  style={{
                    width: `${discount}%`,
                    backgroundColor: discount >= 100 ? "#4caf50" : "#ff9800",
                  }}
                ></div>
              </div>
              <div className="buyMore mt-3">
                <div>
                  Mua thêm{" "}
                  <span className="discount-span">
                    {(money - moneyUsed).toLocaleString()}đ
                  </span>{" "}
                  để được miễn phí giao hàng toàn quốc
                </div>
              </div>
            </div>
            <div className="col-2">
              <IconButton onClick={toggleDrawer(false)} aria-label="close">
                <IoClose />
              </IconButton>
              <img
                className="buyImg "
                src="https://file.hstatic.net/200000306687/file/giphy__1__c91b6f02cea04a969d655681bb73caf8_small.gif"
                alt=""
              />
            </div>
          </div>
          <hr className="mb-0" />
          <div className="products">
            <div className="product row">
              <div className="productImg col-3">
                <img
                  src="https://bizweb.dktcdn.net/100/520/624/products/3d47e0b70d0b318948f8bb351518d1ad-503c3ec4616745e5aeec758d395e8d47-5fd2beca1a7b4da9b8adfc0478bd3bf2.jpg?v=1720423781723"
                  alt=""
                  className="productImg"
                />
              </div>
              <div className="col-7 ps-3">
                <div className="productName">
                  ÁO THUN LOGO HAI TONE CHACOAL Xanh đậm / S / Cotton
                </div>
                <div className="productPrice">1.015.000₫</div>
                <div>
                  <QuantityCounter />
                </div>
              </div>
              <div className="col-2 d-flex align-items-center px-0">
                <div className="btn">Xoá</div>
              </div>
            </div>
          </div>
          <hr className="mb-0" />
          <div className="cartBottom">
            <div className="row">
              <div className="addNote col-6 " onClick={handleAddNoteClick}>
                Thêm ghi chú
              </div>
              {/* Ghi chú xuất hiện/ẩn */}
              <div className={`note ${openNote ? "open" : "close"}`}>
                <div className="my-1">Thêm ghi chú</div>
                <textarea
                  className="noteText my-1"
                  placeholder="Chúng tôi có thể giúp gì cho bạn?"
                ></textarea>
                <div
                  className="btn btnSaveNote w-100 my-1"
                  onClick={handleSaveNoteClick}
                >
                  Lưu
                </div>
              </div>
              <div className="watchMore col-6 text-end pe-4">
                Xem chi tiết giỏ hàng
              </div>
            </div>
            <div className="priceText">
              Phí ship & thuế được tính ở Trang Thanh Toán
            </div>
            <div>
              <button className="btn-danger w-100 btn mb-2 text-center">
                Thanh toán • {moneyUsed}
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Cart;
