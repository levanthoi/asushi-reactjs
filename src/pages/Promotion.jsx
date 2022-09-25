import React from "react";
import Banner from "src/components/Banner/Banner";
import Helmet from "src/components/Helmet/Helmet";
import PageAbout from "src/components/PageAbout";
import CardPromotion from "src/components/Promotion/CardPromotion";
import DataPromotion from "src/components/Promotion/DataPromotion";
import images from "src/static/images/images";


const Promotion = () => {
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
                      <CardPromotion />
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
    </Helmet>
  );
};

export default Promotion;
