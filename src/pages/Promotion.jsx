import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Banner from "src/components/Banner/Banner";
import Helmet from "src/components/Helmet/Helmet";
import PageAbout from "src/components/PageAbout";
import CardPromotion from "src/components/Promotion/CardPromotion";
import DataPromotion from "src/components/Promotion/DataPromotion";
import images from "src/static/images/images";



const Promotion = () => {
  const [active, setActive] = useState(false);

  console.log(active);
  const handleClick = (id) => {
    console.log('saas',{id});
  }
  return (
    <Helmet title="Khuyến mãi">
      <Banner />
      <main id="main" className="main clearfix">
        <PageAbout name="Khuyến mại" nameJapan="麺類" />
        <div className="page-promotion clearfix">
          <div className="container">
            <div className="promotion-content clearfix">
              <div className="promotion-content-left">
                <div className="list-promotion">
                  <div className="mush" dir="rtl">
                    {DataPromotion.map((item) => (
                      <div key={item.id}
                      style={{ cursor: "pointer" }}
                      title="Lorem ipsum dolor sit amet"
                      name={4}
                      className={`title-promotion ms-thumb ${active ? "active" :''}`}
                      onClick={handleClick}
                    >
                      <i className="icon-news" />
                      <h4>{item.title}</h4>
                      <span>
                        {item.subtitle} 
                      </span>
                      <div className="wrap-social">
                        <span className="publicdate">12/09/2016</span>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="promotion-content-right">
                <div
                  className="content-promotion content-promotion-1"
                  style={{ display: "block" }}
                >
                  <img
                    alt=""
                    src={images.promotion1}
                    style={{ width: 635, height: 890 }}
                  />
                </div>
                <div
                  className="content-promotion content-promotion-2"
                  style={{ display: "none" }}
                >
                  <p>
                    <img
                      alt=""
                      src={images.promotion1}
                      data-src="http://w3ni385.web3nhat.net/data/media/363/files/img_promotion.jpg"
                    />
                  </p>
                </div>
                <div
                  className="content-promotion content-promotion-3"
                  style={{ display: "none" }}
                >
                  <p>
                    <img
                      alt=""
                      src={images.promotion1}
                    />
                  </p>
                </div>
                <div
                  className="content-promotion content-promotion-4"
                  style={{ display: "none" }}
                >
                  <p>
                    <img
                      alt=""
                      src={images.promotion1}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Helmet >
  );
};

export default Promotion;
