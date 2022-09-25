import React from "react";
import { Link } from "react-router-dom";
import MenuProduct from "./DataMenu";


const MenuProd = () => {
  return (
    <ul role="tablist" className="menu-product">
      {MenuProduct.map((menu) => (
        <li key={menu.id} role="presentation">
          <Link to={menu.link}>{menu.name} </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuProd;
