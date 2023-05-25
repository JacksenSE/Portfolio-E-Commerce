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
      <a href="/ShopLanguages"><img src="/Js.svg"/></a>
      </div>
      <div className="js-c">
      <a href="/ShopFrameworks"><img src="/react.svg"/></a>
      </div>
      <div className="js-c">
      <a href="/ShopLanguages"><img src="/Python.svg"/></a>
      </div>
      <div className="js-c">
      <a href="/ShopFrameworks"><img src="/Bootstrap.svg"/></a>
      </div>
      <div className="js-c">
      <a href="/ShopFrameworks"><img src="/CSS.svg"/></a>
      </div>
      <div className="js-c">
      <a href="/ShopLanguages"><img src="/Java.svg"/></a>
      </div>
    </Slider>
    
    </>
  );
}
export default Carousel