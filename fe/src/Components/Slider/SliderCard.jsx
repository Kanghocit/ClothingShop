import Slider from "react-slick";
import Card from "../Card/index";

const SliderCard = ({ slidesToShow, slidesToScroll }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <Slider {...settings} className="slider-card">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Slider>
    //min 5
  );
};

export default SliderCard;
