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
    <>
    <Slider {...settings} className="Slider">
      <div className="js-c">
      <a href="/ShopLanguages"><img src="./src/assets/Js.svg"/></a>
      </div>
      <div className="js-c">
      <a href="/ShopFrameworks"><img src="./src/assets/React.svg"/></a>
      </div>
      <div className="js-c">
      <a href="/ShopLanguages"><img src="./src/assets/Python.svg"/></a>
      </div>
      <div className="js-c">
      <a href="/ShopFrameworks"><img src="./src/assets/Bootstrap.svg"/></a>
      </div>
      <div className="js-c">
      <a href="/ShopFrameworks"><img src="./src/assets/CSS.svg"/></a>
      </div>
      <div className="js-c">
      <a href="/ShopLanguages"><img src="./src/assets/Java.svg"/></a>
      </div>
    </Slider>
    
    </>
  );
}
export default Carousel