import React from "react";
import { Link } from "react-router-dom";

const CardBanner = (props) => {
    const {style, classText, title} = props;
  return (
    <div
      className={`ashahi ${classText}`}
      style={{
        background: `url(${style}) no-repeat center`,
      }}
    >
      <div className="container">
        <div className={`content-ashahi content-${classText} clearfix`}>
          <div className="view">
            <Link to="/about" title={title}>
              {title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBanner;
