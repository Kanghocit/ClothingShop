import Slider from "react-slick";

const ImageSlider = ({ slidesToShow, slidesToScroll, imgListSrc }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <Slider {...settings} className="slider">
      {imgListSrc.map((item, index) => (
        <div key={index}>
          <img src={item} className="imgSlide" alt={`slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
