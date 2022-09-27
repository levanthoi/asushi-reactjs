import React, { useRef } from "react";
import images from "src/static/images/images";
import Slider from "react-slick";

const CardSlider2 = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="ashahi ashahi51">
      <div id="owl-demo" className="owl-carousel owl-theme">
        <div className="owl-item">
          <Slider {...settings} ref={sliderRef}>
            <div>
              <img u="image" src={images.slider2} />
            </div>
            <div>
              <img u="image" src={images.slider2} />
            </div>
          </Slider>
        </div>
        <span u="arrowleft" className="owl-arrow-left" onClick={gotoPrev} />
        <span u="arrowright" className="owl-arrow-right" onClick={gotoNext} />
      </div>
    </div>
  );
};

export default CardSlider2;