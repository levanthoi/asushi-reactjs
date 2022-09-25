import React from "react";
import { Link } from "react-router-dom";
import images from "src/static/images/images";

const Banner = () => {
  return (
    <div id="banner-page" className="banner-page clearfix">
      <div className="banner-page-content">
        <div className="box-img-banner-page">
          <Link to="/about" target="_blank">
            <img
              width="100%"
              src={images.bannerPri}
              alt="Cùng Asahi khám phá - ẩm thực Nhật"
            />
          </Link>
        </div>
        <div className="box-info-banner-page">
          <div className="banner-page-title bounceInLeft animated">
            <p className="banner-page-title1">Cùng Asahi khám phá </p>
            <p className="banner-page-title2"> ẩm thực Nhật</p>
          </div>
          <div className="banner-page-view-all bounceInLeft animated">
            <Link to="/about" title="Xem thêm">
              Xem thêm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
