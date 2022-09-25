import React from "react";
import images from "src/static/images/images";
import { Link } from 'react-router-dom';
const CartItem = () => {
  return (
    <div className="item-cart productid-11088257">
      <div style={{ width: "18%" }} className="image">
        <Link
          className="product-image"
          title="Voucher Gia Viên"
          to="/food-name-pd,5556"
        >
          <img width={75} height="auto" src={images.sp103} />
        </Link>
      </div>
      <div style={{ width: "31%" }} className="a-left">
        <h2 className="product-name">
          <Link href="/food-name-pd,5556" title="Voucher Gia Viên">
            Voucher Gia Viên
          </Link>
        </h2>
      </div>
      <div style={{ width: "15%" }} className="a-right">
        <span className="item-price">
          <span className="price">
            <span className="pricetext">200.000</span>
            <span className="currencytext">đ</span>
          </span>
        </span>
      </div>
      <div style={{ width: "14%", display: "flex" }} className="a-center">
        <button
          onclick="decreaseQty('#quantity-5572', '5572')"
          className="reduced items-count btn-minus"
          type="button"
        >
          –
        </button>
        <input
          onblur="updateQuantity('5572', $('#quantity-5572').val());"
          type="text"
          maxLength={3}
          min={1}
          step={1}
          className="input-text number-sidebar qtyItem"
          id="quantity-5572"
          name="qty"
          defaultValue={1}
        />
        <button
          onclick="increaseQty('#quantity-5572', '5572')"
          className="increase items-count btn-plus"
          type="button"
        >
          +
        </button>
      </div>
      <div style={{ width: "15%" }} className="a-center">
        <span className="cart-price">
          <span className="price">
            <span className="pricetext">200.000</span>
            <span className="currencytext">đ</span>
          </span>
        </span>
      </div>
      <div style={{ width: "7%" }}>
        <a
          onclick="return confirm('Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?')"
          className="button remove-item remove-item-cart"
          title="Xóa"
          href="/economy/shoppingcart/delete/key/5572"
        />
      </div>
    </div>
  );
};

export default CartItem;
