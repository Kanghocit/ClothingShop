import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card/index";
import Slider from "react-slick";

const HomeCollection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 185,
    hours: 2,
    minutes: 2,
    seconds: 2,
  });
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(countdown); // Stop countdown when time is up
          return prevTime;
        }

        let newDays = days,
          newHours = hours,
          newMinutes = minutes,
          newSeconds = seconds - 1;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="homeCollection">
      <div className="hc-header row d-flex justify-content-center">
        <div className="col-2 d-flex align-items-center justify-content-end">
          <hr className="w-25" />
        </div>
        <Link to={"/"} className="aboutLink col-2 text-center p-0 m-0">
          Danh mục nổi bật
        </Link>
        <div className="col-2 d-flex align-items-center justify-content-start">
          <hr className="w-25" />
        </div>
        <div className="subAbout text-center">
          List các nhóm sản phẩm nổi bật nhất
        </div>
      </div>
      <div className="hc-list container d-flex justify-content-center align-items-center">
        <div className="hc-list-item p-1 ">
          <div className="hc-item-image">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/520/624/themes/974135/assets/home_collection_list_item_image__1.jpg?1731543625371"
              alt="Flash Sale"
              className="hc-img"
            />
          </div>
          <span>Flash Sale</span>
        </div>
        <div className="hc-list-item p-1 ">
          <div className="hc-item-image">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/520/624/themes/974135/assets/home_collection_list_item_image__2.jpg?1731543625371"
              alt="Flash Sale"
              className="hc-img"
            />
          </div>
          <span>Áo ngủ</span>
        </div>
        <div className="hc-list-item p-1 ">
          <div className="hc-item-image">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/520/624/themes/974135/assets/home_collection_list_item_image__3.jpg?1731543625371"
              alt="Flash Sale"
              className="hc-img"
            />
          </div>
          <span>Áo kiều</span>
        </div>
        <div className="hc-list-item p-1 ">
          <div className="hc-item-image">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/520/624/themes/974135/assets/home_collection_list_item_image__4.jpg?1731543625371"
              alt="Flash Sale"
              className="hc-img"
            />
          </div>
          <span>Đầm</span>
        </div>
        <div className="hc-list-item p-1 ">
          <div className="hc-item-image">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/520/624/themes/974135/assets/home_collection_list_item_image__5.jpg?1731543625371"
              alt="Flash Sale"
              className="hc-img"
            />
          </div>
          <span>Quần</span>
        </div>
        <div className="hc-list-item p-1 ">
          <div className="hc-item-image">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/520/624/themes/974135/assets/home_collection_list_item_image__6.jpg?1731543625371"
              alt="Flash Sale"
              className="hc-img"
            />
          </div>
          <span>Váy</span>
        </div>
        <div className="hc-list-item p-1 ">
          <div className="hc-item-image">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/520/624/themes/974135/assets/home_collection_list_item_image__7.jpg?1731543625371"
              alt="Flash Sale"
              className="hc-img"
            />
          </div>
          <span>Áo thun</span>
        </div>
        <div className="hc-list-item p-1 ">
          <div className="hc-item-image">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/520/624/themes/974135/assets/home_collection_list_item_image__8.jpg?1731543625371"
              alt="Flash Sale"
              className="hc-img"
            />
          </div>
          <span>Áo khoác</span>
        </div>
      </div>
      <div className="home-flashsale container mt-5 ms-5 row">
        <div className="hf-left col-4">
          <div className="img-wrapper">
            <img
              src="https://bizweb.dktcdn.net/thumb/grande/100/520/624/themes/974135/assets/home_flashsale_d_img__1.jpg?1731543625371"
              alt="Flash Sale"
            />
            <div className="datatime">
              <div className="time-box">
                <h1 className="time">
                  {String(timeLeft.days).padStart(2, "0")}
                </h1>
                <span className="time-box-span">Ngày</span>
              </div>
              <div className="time-box">
                <h1 className="time">
                  {String(timeLeft.hours).padStart(2, "0")}
                </h1>
                <span className="time-box-span">Giờ</span>
              </div>
              <div className="time-box">
                <h1 className="time">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </h1>
                <span className="time-box-span">Phút</span>
              </div>
              <div className="time-box">
                <h1 className="time">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </h1>
                <span className="time-box-span">Giây</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hf-right col-8 d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default HomeCollection;
