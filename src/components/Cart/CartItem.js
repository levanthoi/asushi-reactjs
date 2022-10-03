import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import shop from "src/helper/shop";
import { useDispatch } from "react-redux";
import { increaseCart, decreaseCart, updateCart, deleteFromCart } from "src/redux/reducers/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, name, img, price, quantity, nameJapan } = props.item;
  const [tempPrice, setTempPrice] = useState(price);
  const categoryUrl = shop.getUrl(id);

  useEffect(() => {
    setTempPrice(quantity * price);
  }, [quantity])

  return (
    <div className="item-cart productid-11088257">
      <div style={{ width: "18%" }} className="image">
        <Link
          className="product-image"
          title={name}
          to={categoryUrl && `/product/${categoryUrl}/food-name-${id}`}
        >
          <img width={75} height="auto" src={img} />
        </Link>
      </div>
      <div style={{ width: "31%" }} className="a-left">
        <h2 className="product-name">
          <Link 
          to={`/product/${categoryUrl}/food-name-${id}`}
           title={name}>
            {`${name} - ${nameJapan}`}
          </Link>
        </h2>
      </div>
      <div style={{ width: "15%" }} className="a-right">
        <span className="item-price">
          <span className="price">
            <span className="pricetext">{shop.formatProductPrice(price)}</span>
            {/* <span className="currencytext">đ</span> */}
          </span>
        </span>
      </div>
      <div style={{ width: "14%", display: "flex" }} className="a-center">
        <button className="reduced items-count btn-minus" type="button" onClick={()=>dispatch(decreaseCart(props.item))}>
          –
        </button>
        <input
          type="text"
          maxLength={3}
          min={1}
          step={1}
          className="input-text number-sidebar qtyItem"
          id="quantity-5572"
          name="qty"
          value={quantity}
          onChange={() => dispatch(updateCart(props.item))}
        />
        <button className="increase items-count btn-plus" type="button" onClick={()=>dispatch(increaseCart(props.item))}>
          +
        </button>
      </div>
      <div style={{ width: "15%" }} className="a-center">
        <span className="cart-price">
          <span className="price">
            <span className="pricetext">{shop.formatProductPrice(tempPrice)}</span>
            {/* <span className="currencytext">đ</span> */}
          </span>
        </span>
      </div>
      <div style={{ width: "7%" }}>
        <a
          // onClick={() => removeFromCart(props.item)}
          className="button remove-item remove-item-cart"
          title="Xóa"
          onClick={() => {
            dispatch(deleteFromCart(props.item));
            setTempPrice();
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
