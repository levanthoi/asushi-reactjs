import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Banner from "src/components/Banner/Banner";
import Helmet from "src/components/Helmet/Helmet";
import PageAbout from "src/components/PageAbout";
import CardPromotion from "src/components/Promotion/CardPromotion";
import { DataPromotion } from "src/data/data";
import images from "src/static/images/images";



const Promotion = () => {
  const [active, setActive] = useState(1);
  const handleClick = (id) => {
    setActive(id);
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
                        title={item.title}
                        name={4}
                        className={`title-promotion ms-thumb ${active === item.id ? 'active' : ''}`}
                        onClick={() => handleClick(item.id)}
                      >
                        <i className="icon-news" />
                        <h4>{item.title}</h4>
                        <span>
                          {item.subtitle}
                        </span>
                        <div className="wrap-social">
                          <span className="publicdate">{item.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="promotion-content-right">
                {
                  DataPromotion.map(item => {
                    return (
                      <div
                      key={item.id}
                        className={`content-promotion content-promotion-${item.id}`}
                        style={ active === item.id ? {display:"block"} : {display: "none"} }
                         
                      >
                        <img
                          alt=""
                          src={images[item.img]}
                        // style={{ width: 635, height: 890 }}
                        />
                      </div>
                    )
                  })
                }
                
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </Helmet >
  );
};

export default Promotion;
