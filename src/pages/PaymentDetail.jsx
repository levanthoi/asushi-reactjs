import React from 'react';
import { Link } from 'react-router-dom';
import CardInput from 'src/components/CardInput';
import ChildrenItem from 'src/components/Payment/ChildrenItem';
import ColItem from 'src/components/Payment/ColItem';
import ItemCity from 'src/components/Payment/ItemCity';
import { DataPayment } from 'src/data/data';
import images from 'src/static/images/images';


const PaymentDetail = () => {
  // const { name, classOne,classTwo, classThree, classFour, label1, label2 }
  const box = {
    classOne: "",
    classTwo: "",
    classThree: "",
    classFour: "",
    label: "Billing",
  }

  return (
    <div className="row">
      <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 pad-10">
        <div className="border-payment">
          <div className="title-payment">
            <h2>Địa chỉ giao hàng</h2>
          </div>
          <div className="check-address">
            <div className="check-address-border">
              <b>Tôi muốn thanh toán và nhận hàng tại :</b>
              <div className="row">
                <ColItem>
                  {DataPayment.slice(0, DataPayment.length/2).map((item) => {
                    return(
                      <CardInput key={item.id} box={box} item={item}  />
                    )
                  })}
                </ColItem>
                {/* <ColItem>
                  {DataPayment.slice(DataPayment.length/2).map((item) => {
                    return(
                      <CardInput key={item.id} box={box} item={item}  />
                    )
                  })}
                </ColItem> */}
                {/* {DataPayment.map((item) => {
                  const { id, name, isImportant } = item;
                  return (
                    <>
                      {
                        DataPayment.length / 2 >= id ?
                          <ColItem>
                            <cardInput label="name" label2='Billing' name='Họ và tên' />
                          </ColItem>
                          : <ColItem>
                            <cardInput label="name" label2='Billing' name='Họ và tên' />
                          </ColItem>

                      }
                    </>
                  )
                })} */}
                {/* <ColItem>
                  <ChildrenItem label="name" label2='Billing' name='Họ và tên' />
                  <ChildrenItem label="phone" label2='Billing' name='Số điện thoại' />
                  <ChildrenItem label="email" label2='Billing' name='Email' />
                </ColItem>
                <ColItem>
                  <ChildrenItem label2='Billing' label="address" name='Địa chỉ' />
                </ColItem>
                <ColItem>
                  <ItemCity label='city' name='Thành phố/Tỉnh' />
                  <ItemCity label='district' name='Quận/Huyện/TX' />
                </ColItem> */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="panel-body">
                    <ChildrenItem label="note" label2='Orders' name='Ghi chú' />
                  </div>
                </div>
              </div>
              <div className="col-xs-12" id="txtInformation">
                <input
                  id="ytbilltoship"
                  type="hidden"
                  name="Billing[billtoship]"
                  defaultValue={0}
                />
                <label id="nav-menu-mobile">
                  {/* <a href="#steps-hoso"> */}
                  <input
                    type="checkbox"
                    name="Billing[billtoship]"
                    id="billtoship"
                    defaultChecked="checked"
                    defaultValue={1}
                  />{" "}
                  Giao hàng đến cùng địa chỉ
                  {/* </a> */}
                </label>
              </div>
            </div>
          </div>
          <div className="steps-hoso">
            <div className="row">
              <ColItem>
                <ChildrenItem label="name" label2='Shipping' name='Họ và tên' />
                <ChildrenItem label="phone" label2='Shipping' name='Số điện thoại' />
                <ChildrenItem label="email" label2='Shipping' name='Email' />
              </ColItem>
              <ColItem>
                <ChildrenItem label2='Billing' label="address" name='Địa chỉ' />
              </ColItem>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-infor-user">
                  <div className="panel-body">
                    <ItemCity label='city' name='Thành phố/Tỉnh' />
                    <ItemCity label='district' name='Quận/Huyện/TX' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="next-step">
            <Link
              to="/product"
              title="Tiếp tục mua hàng"
              className="btn-back-step"
            >
              <i className="fa-solid fa-arrow-left" />
              Tiếp tục mua hàng{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 pad-10">
        <div className="border-payment">
          <div className="title-payment">
            <h2>Thông tin mua hàng</h2>
          </div>
          <div className="infor-order">
            <ItemOrder />
            <ItemOrder />
            <ItemOrder />
          </div>
          <div className="voucher">
            <label htmlFor="">Mã giảm giá</label>
            <input
              className="form-control coupon_code"
              defaultValue=""
              title="Coupon code"
              name="coupon_code"
              type="text"
              placeholder="Nhập mã khuyến mãi"
              maxLength={30}
            />
            <input
              // onclick="getdiscount();"
              type="button"
              className="btn-submit-voucher"
              defaultValue="Gửi"
            />
          </div>
          <div className="total-order">
            <p id="money_sub_total">
              Tổng tiền <span>800.000 đ</span>
              <input
                type="hidden"
                id="money_sub_total_input"
                defaultValue={800000}
              />
            </p>
            <p id="money_discount">
              Mã giảm giá <span>0 đ </span>
              <input type="hidden" id="money_discount_input" defaultValue={0} />
            </p>
            <p id="money_ship">
              Phí vận chuyển <span>Thông báo sau</span>
              <input type="hidden" id="money_ship_input" defaultValue={0} />
            </p>
            <h3>
              <p id="money_total">
                Tổng tiền <span>800.000 đ</span>
                <input type="hidden" id="money_total_input" defaultValue={800000} />
              </p>
            </h3>
          </div>
        </div>
        <div className="border-payment">
          <div className="title-payment">
            <h2>Hình thức thanh toán </h2>
          </div>
          <div className="payment-method">
            <div className="col-xs-12 payment">
              <ul className="list-content">
                <li className="active">
                  <label>
                    <input
                      type="radio"
                      defaultValue={2}
                      name="Orders[payment_method]"
                      defaultChecked=""
                    />
                    Thanh toán tiền mặt khi nhận hàng
                  </label>
                </li>
              </ul>
              {/*  */}
            </div>
          </div>
        </div>
        <div className="btn-end-step1">
          <Link
            to="/bill"
            id="btn-payment-submit"
            className="btn-next-step"
          >
            Thanh toán
          </Link>
        </div>
      </div>
    </div>

  )
}

const ItemOrder = () => {
  return (
    <div className="item-order">
      <p>
        <Link to="/food-name-pd,5556" title="Voucher Gia Viên 3">
          <img
            src={images.sp103}
            alt="Voucher Gia Viên 3"
          />
          <b>Voucher Gia Viên 3</b>
        </Link>
      </p>
      <span>200.000 x 1 </span>
    </div>
  )
}

export default PaymentDetail