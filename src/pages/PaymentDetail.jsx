import React,{ useState} from 'react';
import { Link } from 'react-router-dom';
import CardInput from 'src/components/CardInput';
import ChildrenItem from 'src/components/Payment/ChildrenItem';
import ColItem from 'src/components/Payment/ColItem';
import ItemCity from 'src/components/Payment/ItemCity';
import { DataCategory, DataPayment, DataProduct } from 'src/data/data';
import { useSelector } from 'react-redux';
import shop from 'src/helper/shop';


const PaymentDetail = () => {
  const [showStep, setShowStep] = useState(false);
  const box = {
    classOne: "",
    classTwo: "",
    classThree: "",
    classFour: "",
    label: "Billing",
  }
  const itemNote = DataPayment.find(item => item.field === 'note');
  if (itemNote.field === 'note') {
    // console.log("itemNote", itemNote);
    // console.log("box", box);
    // return {...box, label:"Order"}
  }
  // Lấy dữ liệu giỏ hàng
  const cart = useSelector(state => state.cart).cart;
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  // const handleClick =() => {
  //   setShowStep(!showStep);
  //   console.log("step ok", showStep);
  //   // return setShowStep(!showStep)
  // }
  return (
    <div className="product-global ">
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
                    {DataPayment.slice(0, DataPayment.length / 2).map((item) => {
                      return (
                        <CardInput key={item.id} box={box} item={item} />
                      )
                    })}
                  </ColItem>
                  <ColItem>
                    {DataPayment.slice(DataPayment.length / 2, -1).map((item) => {
                      return (
                        <CardInput key={item.id} box={box} item={item} />
                      )
                    })}
                  </ColItem>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="panel-body">
                      <CardInput box={box} item={itemNote} />
                    </div>
                  </div>
                </div>
                <div className="col-xs-12" id="txtInformation"  >
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
                      onClick={() => setShowStep(!showStep)}
                    />
                    Giao hàng đến cùng địa chỉ
                    {/* </a> */}
                  </label>
                </div>
              </div>
            </div>
            {showStep &&
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
            }
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
              {cart && cart.map(item => (
                <ItemOrder key={item.id} item={item} />
              ))}
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
                type="button"
                className="btn-submit-voucher"
                defaultValue="Gửi"
              />
            </div>
            <div className="total-order">
              <p id="money_sub_total">
                Tổng tiền <span>{shop.formatProductPrice(totalPrice)}</span>
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
                  Tổng tiền <span>{shop.formatProductPrice(totalPrice)}</span>
                  <input type="hidden" id="money_total_input" value={totalPrice} />
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
                        defaultChecked="true"
                      />
                      Thanh toán tiền mặt khi nhận hàng
                    </label>
                  </li>
                </ul>
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
    </div>

  )
}

const ItemOrder = (props) => {
  // Lấy dữ liệu giỏ hàng
  const cart = useSelector(state => state.cart).cart;
  const { id, name, price, quantity, img } = props.item;
  const product = cart.find(item => item.id === id);
  const category = DataCategory.find(item => item.id == product.id);
  // const urlCategory = category.url;
  console.log("product", product);
  console.log("DataCategory", DataCategory);
  console.log("category", category);
  // console.log("urlCategory", urlCategory);
  return (
    <div className="item-order">
      <p>
        <Link 
        // to={`/product/${urlCategory}/food-name-${id}`} 
        title={name}>
          <img
            src={img}
            alt={name}
          />
          <b>{name}</b>
        </Link>
      </p>
      <span>{`${shop.formatProductPrice(price)} x ${quantity}`}</span>
    </div>
  )
}

export default PaymentDetail