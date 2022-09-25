import React from "react";
// import { Link } from "react-router-dom";
import CardItemHistory from "./CardItemHistory";

const History = () => {
  return (
    <div className={`ashahi-about-us ashahi-about-us1 clearfix`}>
      <div className="container">
        <div className={`ashahi-about-us-title ashahi-about-us1-title`}>
          <div className="title-about">
            <h2>RA ĐỜI VÀO NĂM 2004</h2>
          </div>
          <div className="content-about">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio.
            </p>
          </div>
        </div>
        <div className={`ashahi-about-us-content ashahi-about-us1-content clearfix`}>
          <div className={`row-about-us1`}>
            <CardItemHistory title='Chúng tôi là ai'/>
            <CardItemHistory title='Why choose us' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
