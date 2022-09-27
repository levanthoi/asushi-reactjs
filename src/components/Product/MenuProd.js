import React from "react";
import { Link } from "react-router-dom";
// import MenuProduct from "./DataMenu";
import {DataCategory} from 'src/data/data';


const MenuProd = () => {
  return (
    <ul role="tablist" className="menu-product">
      {DataCategory.map((category) => {
        const {id, name, url} = category;
        return(
          <li key={id} role="presentation">
            <Link to={`/product/${url}`}>{name} </Link>
          </li>
        )
      })}
    </ul>
  );
};

export default MenuProd;
