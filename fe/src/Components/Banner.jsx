import React from "react";

const Banner = () => {
  const banner = [
    {
      name: "Cocktail Dresses",
      img: "https://bizweb.dktcdn.net/thumb/grande/100/520/624/themes/974135/assets/home_banner_stylist_image_d__1.jpg?1731543625371",
    },
    {
      name: "Casual Jumpsuits",
      img: "https://bizweb.dktcdn.net/thumb/grande/100/520/624/themes/974135/assets/home_banner_stylist_image_d__2.jpg?1731543625371",
    },
    {
      name: "Format Pants",
      img: "https://bizweb.dktcdn.net/thumb/grande/100/520/624/themes/974135/assets/home_banner_stylist_image_d__3.jpg?1731543625371",
    },
  ];
  return (
    <>
      <div class="banner-container mt-3">
        <img
          src="https://bizweb.dktcdn.net/thumb/2048x2048/100/520/624/themes/974135/assets/home_banner_lg_image_d.jpg?1731543625371"
          alt="Banner Image"
          class="banner-img"
        />
        <div class="banner-content">
          <div className="banner-name text-center fw-bold mb-3 ">
            Bộ sưu tập mùa hè
          </div>
          <hr class="w-25 m-auto " />
          <div className="text-center mt-3">
            Vẻ Đẹp Trường Tồn Được Tái Tạo: Nghiên Cứu Sự Đối Lập trong Xu Hướng
            Thời
          </div>
          <button className="btn btnBanner ">Khám phá ngay</button>
        </div>
      </div>
      <div className="banner-wrapper container pt-3 row mx-auto">
        {banner.map((item, index) => (
          <div className={"banner-index col-4 mx-3"} key={index}>
            <img src={item.img} className="banner-img-index w-100 " />
            <div className="banner-btn-name mx-auto px-2 py-1">{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Banner;
