import React from "react";

const CardContent = (props) => {
    const {id, title, subtitle, desc, img} = props.item;
  return (
    <div className={`ashahi ashahi${id}`}>
      <div className="container">
        <div className={`content-ashahi content-ashahi${id} clearfix`}>
          <div className="title">
            <h2>{title}</h2>
          </div>
          <div className="short-description">
            <span>
              {subtitle}
            </span>
          </div>
            {desc && 
            <div className="description">
                <p>{desc}</p>
            </div>}
        </div>
      </div>
    </div>
  );
};

export default CardContent;
