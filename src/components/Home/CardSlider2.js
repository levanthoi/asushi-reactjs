import React from "react";
import images from "src/static/images/images";


const CardSlider2 = () => {
  return (
    <div className="ashahi ashahi51">
      <div id="owl-demo" className="owl-carousel owl-theme">
        <div className="owl-item">
          <div className="item">
            <img
              src={images.slider2}
              alt="Nhà hàng asahi 4"
            />
          </div>
        </div>
        <span u="arrowleft" className="owl-arrow-left" />
        <span u="arrowright" className="owl-arrow-right" />
      </div>
    </div>
  );
};

export default CardSlider2;
