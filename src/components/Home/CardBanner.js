import React from "react";
import { Link } from "react-router-dom";

const CardBanner = (props) => {
    const {id, title, img} = props.item;
  return (
    <div
      className={`ashahi ashahi${id}`}
      style={{
        background: `url(${img}) no-repeat center`,
      }}
    >
      <div className="container">
        <div className={`content-ashahi content-ashahi${id} clearfix`}>
          <div className="view">
            <Link to={id ===4 ? "/product" : "/about"} title={title}>
              {title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBanner;
