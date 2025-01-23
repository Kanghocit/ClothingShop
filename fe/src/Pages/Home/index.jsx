import React from "react";
import {
  ImageSlider,
  AboutUs,
  HomeCollection,
  Banner,
  Footer,
  Trending,
  BestSeller,
  Vendor,
} from "../../Components";


const Home = () => {
  const imgListSrc = [
    "https://bizweb.dktcdn.net/100/520/624/themes/974135/assets/home_slider_item_image_desktop_1.jpg?1731543625371",
    "https://bizweb.dktcdn.net/100/520/624/themes/974135/assets/home_slider_item_image_desktop_2.jpg?1731543625371",
  ];

  return (
    <>
      <ImageSlider
        slidesToShow={1}
        slidesToScroll={1}
        imgListSrc={imgListSrc}
      />
      <AboutUs />
      <HomeCollection />
      <Banner />
      <Trending />
      <BestSeller />
      <Vendor />
      <Footer />
    </>
  );
};

export default Home;
