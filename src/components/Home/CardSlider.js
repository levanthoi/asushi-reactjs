  import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { DataSlide } from "src/data/data";


const CardSlider = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
    <div id="slider">
      <div className="slider1_container">
        <Slider {...settings} ref={sliderRef}>
          {DataSlide.map(item => (
            <Link key={item.id} to="/" title={item.title}>
              <img
                u="image"
                src={item.img}
                alt={item.title}
              />
            </Link>
          ))}
        </Slider>
      </div>
      <span u="arrowleft" className="jssora05l" onClick={gotoPrev} />
      <span u="arrowright" className="jssora05r" onClick={gotoNext} />
    </div>
  );
};

export default CardSlider;