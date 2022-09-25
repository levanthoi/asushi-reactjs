import React from "react";

const CardPromotion = () => {
  return (
    <div
      style={{ cursor: "pointer" }}
      title="Lorem ipsum dolor sit amet"
      name={4}
      className="title-promotion ms-thumb "
    >
      <i className="icon-news" />
      <h4>Lorem ipsum dolor sit amet</h4>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dt in culpa qui officia deserunt
        mollit anim id est laborum...
      </span>
      <div className="wrap-social">
        <span className="publicdate">12/09/2016</span>
      </div>
    </div>
  );
};



export default CardPromotion;
