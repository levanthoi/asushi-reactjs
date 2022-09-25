import React from "react";

const CardContent = (props) => {
    const {title, classText, shortDescription, description} = props;
  return (
    <div className={`ashahi ${classText}`}>
      <div className="container">
        <div className={`content-ashahi content-${classText} clearfix`}>
          <div className="title">
            <h2>{title}</h2>
          </div>
          <div className="short-description">
            <span>
              {shortDescription}
            </span>
          </div>
            {description && 
            <div className="description">
                <p>{description}</p>
            </div>}
        </div>
      </div>
    </div>
  );
};

export default CardContent;
