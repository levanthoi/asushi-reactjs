import React from "react";
import { Link } from "react-router-dom";

const CartButton = (props) => {
    const {title, path, class1} =props;
  return (
    <li>
      <button
        className={`button ${class1}`}
        aria-label={title}
        title={title}
        type="button"
      >
        <Link to={path}>
            <span>{title}</span>
        </Link>
      </button>
    </li>
  );
};

export default CartButton;
