import React, { useRef } from "react";
import Slider from "react-slick";
import { DataSlide } from "src/data/data";
const CardSlider2 = (props) => {

  // const {id, img} = props.item;
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
    <div className={`ashahi ashahi51`}>
      <div id="owl-demo" className="owl-carousel owl-theme">
        <div className="owl-item">
          <Slider {...settings} ref={sliderRef}>
            {DataSlide.map((item) => (
              <div key={item.id}>
                <img u="image" src={item.img} alt={item.title} />
              </div>
            ))}
            {/* <div>
              <img u="image" src={images.slider2} />
            </div> */}
          </Slider>
        </div>
        <span u="arrowleft" className="owl-arrow-left" onClick={gotoPrev} />
        <span u="arrowright" className="owl-arrow-right" onClick={gotoNext} />
      </div>
    </div>
  );
};

export default CardSlider2;
