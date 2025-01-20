import React from "react";

const Banner = () => {
  return (
    <div class="banner-container mt-3">
      <img
        src="https://bizweb.dktcdn.net/thumb/2048x2048/100/520/624/themes/974135/assets/home_banner_lg_image_d.jpg?1731543625371"
        alt="Banner Image"
        class="banner-img"
      />
      <div class="banner-content">
        <div className="banner-name text-center fw-bold mb-3 ">Bộ sưu tập mùa hè</div>
        <hr class="w-25 m-auto " />
        <div className="text-center mt-3">
          Vẻ Đẹp Trường Tồn Được Tái Tạo: Nghiên Cứu Sự Đối Lập trong Xu Hướng
          Thời
        </div>
        <button className="btn btnBanner ">Khám phá ngay</button>
      </div>
    </div>
  );
};

export default Banner;
