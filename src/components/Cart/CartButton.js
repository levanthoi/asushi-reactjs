import React from "react";
import { Link } from "react-router-dom";

const CartButton = (props) => {
    const {title, path, class1} =props;
  return (
    <li>
      <Link to={path}>
      <button
        className={`button ${class1}`}
        aria-label={title}
        title={title}
        type="button"
      >
            <span>{title}</span>
      </button>
        </Link>
    </li>
  );
};

export default CartButton;
