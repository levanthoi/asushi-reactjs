import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "src/static/images/images";
import { v4 as uuidv4 } from "uuid";

const CardSlider = () => {
  const dataSlider = [
    { id: uuidv4(), img: images.slider1 },
    { id: uuidv4(), img: images.slider1 },
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div id="slider">
      <div className="slider1_container">
        {dataSlider.map((slide, index) => {
          return (
            <Link key={slide.id} to="/" title="Rượu Sake - truyền thống Nhật Bản"
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            >
              <img
                u="image"
                src={slide.img}
                alt="Rượu Sake - truyền thống Nhật Bản"
              />
            </Link>
          );
        })}
      </div>
      <div className="container-dots">
        {Array.from({ length: 2 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
      {/* <div
        u="navigator"
        className="jssorb01"
        style={{
          bottom: 20,
          right: 0,
          left: 667,
          margin: "0px auto",
          width: 32,
          height: 12,
        }}
      > */}
      {/* <div
          u="prototype"
          className="av"
          style={{ position: "absolute", left: 0, top: 0 }}
        />
        <div
          u="prototype"
          style={{ position: "absolute", left: 20, top: 0 }}
          className=""
        /> */}
      {/* </div> */}
      <span u="arrowleft" className="jssora05l" />
      <span u="arrowright" className="jssora05r" />
    </div>
  );
};

export default CardSlider;
