import Slider from "react-slick";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <Slider {...settings} className="slider">
      <div>
        <img
          src="https://bizweb.dktcdn.net/100/520/624/themes/974135/assets/home_slider_item_image_desktop_1.jpg?1731543625371"
          className="imgSlide"
          alt="Slide 1"
        />
      </div>
      <div>
        <img
          src="https://bizweb.dktcdn.net/100/520/624/themes/974135/assets/home_slider_item_image_desktop_2.jpg?1731543625371"
          className="imgSlide"
          alt="Slide 2"
        />
      </div>
    </Slider>
  );
};

export default ImageSlider;
