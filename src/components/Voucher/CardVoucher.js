import React from "react";
import { Link } from "react-router-dom";
import images from "src/static/images/images";

const CardVoucher = (props) => {
    const {title} = props;
  return (
    <div className="col-voucher col-sm-6 col-xs-6">
      <div className="col-voucher-content">
        <div className="box-img box-img-product-voucher">
          <Link
            to="/food-name-pd,5556"
            title={title}
          >
            <img
              src={images.voucher1}
              alt={title}
            />
          </Link>
        </div>
        <div className="box-info-product-voucher">
          <div className="box-info-product-voucher-title">
            <h3>
              <Link
                to="/food-name-pd,5556"
                title={title}
              >
                {title} - 200.000 VND
              </Link>
            </h3>
          </div>
          <div className="box-product-list-bottom box-product-voucher-bottom clearfix">
            <div className="box-qty clearfix">
              <a href="!#" onclick="reductionQty(this)" className="reduction" />
              <input
                type="number"
                className="qty-5572 form-control sc-quantity"
                max-lenght={3}
                defaultValue={1}
                name="qty"
                max={100}
                min={0}
                step={0}
              />
              <a href="!#" onclick="increaseQty(this)" className="increase" />
            </div>
            <div className="box-add-cart">
              <a
                className="btn_add_food"
                name={5572}
                href="!#"
                title="ĐẶT HÀNG"
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
