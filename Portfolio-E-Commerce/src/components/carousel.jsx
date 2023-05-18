import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

 function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="Slider">
      <div className="js-c">
        <img src="./src/assets/Js.svg"/>
      </div>
      <div className="js-c">
      <img src="./src/assets/React.svg"/>
      </div>
      <div className="js-c">
      <img src="./src/assets/Python.svg"/>
      </div>
      <div className="js-c">
      <img src="./src/assets/Bootstrap.svg"/>
      </div>
      <div className="js-c">
      <img src="./src/assets/CSS.svg"/>
      </div>
      <div className="js-c">
      <img src="./src/assets/Java.svg"/>
      </div>
    </Slider>
  );
}
export default Carousel