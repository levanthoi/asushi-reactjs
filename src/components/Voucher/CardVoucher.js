import React, {useState} from "react";
import { Link } from "react-router-dom";
import shop from "src/helper/shop";
import { useDispatch } from "react-redux";
import { addToCart} from "src/redux/reducers/cartSlice";

const CardVoucher = (props) => {
    const {id, name,nameJapan, price, img} = props.item;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("quantity", quantity);
    const cartItem ={
      id: id,
      img: img,
      price: price,
      name: name,
      nameJapan: nameJapan,
      quantity: quantity
    }
    dispatch(addToCart(cartItem));
  }

  return (
    <div className="col-voucher col-sm-6 col-xs-6">
      <div className="col-voucher-content">
        <div className="box-img box-img-product-voucher">
          <Link
            to={`/voucher/${id}`}
            title={name}
          >
            <img
              src={img}
              alt={name}
            />
          </Link>
        </div>
        <div className="box-info-product-voucher">
          <div className="box-info-product-voucher-title">
            <h3>
              <Link
                to={`/voucher/${id}`}
                title={name}
              >
                {name} - {shop.formatProductPrice(price)}
              </Link>
            </h3>
          </div>
          <div className="box-product-list-bottom box-product-voucher-bottom clearfix">
            <div className="box-qty clearfix">
              <a className="reduction" onClick={() => {if(quantity > 1) setQuantity(pre => pre-1)}} />
              <input
                type="number"
                className="qty-5572 form-control sc-quantity"
                max-lenght={3}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                name="qty"
                max={100}
                min={0}
                step={0}
              />
              <a className="increase" onClick={() => setQuantity(pre => pre+1)}/>
            </div>
            <div className="box-add-cart">
              <a
                className="btn_add_food"
                name={5572}
                title="ĐẶT HÀNG"
                onClick={handleSubmit}
                
              >
                ĐẶT HÀNG
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVoucher;
