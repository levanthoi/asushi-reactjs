import React from "react";
import images from "src/static/images/images";

const BoxItem = () => {
  return (
    <div className="col-about-us2">
      <div className="box-img-about-us2">
        <a href="javascript:void(0)" title="MIOSHIKAWA">
          <img src={images.imgabout1} alt="MIOSHIKAWA" />
        </a>
      </div>
      <div className="box-info-about-us2">
        <div className="name-teacher">
          <h3>
            <a href="javascript:void(0)" title="MIOSHIKAWA">
              MIOSHIKAWA
            </a>
          </h3>
          <p>Master Chelf</p>
        </div>
        <div className="about-us2-description">
          <span>
            “There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly ”
          </span>
        </div>
      </div>
    </div>
  );
};

export default BoxItem;
