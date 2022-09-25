import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';

const Bill = () => {
  return (
    <>
      <div>
        <Link
          to="/"
          style={{ fontSize: 20, marginBottom: 20, display: "block" }}
        >
          <i className="fa fa-arrow-circle-left" />
          Quay về trang chủ
        </Link>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pad-10">
          <div className="border-payment w3n-order">
            <div className="check-orderpaper">
              <div className="title-payment" style={{ background: "#f3eded" }}>
                <h2 className="center">Hóa đơn biên nhận</h2>
              </div>
              <div className="col-xs-12">
                <div className="ctn-check-orderpaper">
                  <h3>Thông tin đơn hàng số #530</h3>
                  <CheckInfo title='Thông tin thanh toán' />
                  <CheckInfo title='Thông tin nhận hàng' />
                </div>
                <div className="time-order">
                  <p>
                    <strong>Thời gian đặt hàng : </strong>14-09-2022 23:55:51{" "}
                  </p>
                  <p>
                    <strong>
                      Hình thức thanh toán : Thanh toán khi nhận hàng (COD){" "}
                    </strong>
                  </p>
                  <p>
                    <strong>Trạng thái thanh toán : Chưa thanh toán </strong>
                  </p>
                </div>
              </div>
              <section id="cart" className="cart">
                <div className="bg-cart-page hidden-xs">
                  <div className="a">
                    <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="bg-scroll" style={{ marginTop: 0 }}>
                        <div className="cart-thead">
                          <div style={{ width: "18%" }}>Hình ảnh</div>
                          <div style={{ width: "31%" }}>
                            <span className="nobr">Tên sản phẩm</span>
                          </div>
                          <div style={{ width: "15%" }} className="a-right">
                            <span className="nobr">Giá sản phẩm</span>
                          </div>
                          <div style={{ width: "14%" }} className="a-center">
                            Số lượng
                          </div>
                          <div style={{ width: "15%" }} className="a-center">
                            Tổng cộng
                          </div>
                        </div>
                        <div className="cart-tbody">
                          <ItemCardProduct />
                          <ItemCardProduct />
                          <ItemCardProduct />
                        </div>
                      </div>
                      <br />
                      <div className="statistic-order">
                        <p>
                          <strong>Tổng tiền: </strong>
                          <span className="price">
                            <span className="pricetext">800.000</span>
                            <span className="currencytext">đ</span>
                          </span>
                        </p>
                        <p>
                          <strong>Còn lại: </strong>
                          <span className="price">
                            <span className="pricetext">800.000</span>
                            <span className="currencytext">đ</span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="foot-check-orderpaper">
                {/* <a href="javascript:void(0)" id="printorder"> */}
                  <i className="fa fa-print" />
                  In hóa đơn{" "}
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bill;

const CheckInfo = (props) => {
  const { title } = props;
  return (
    <div className="check-info-order">
      <h4>{title}</h4>
      <ul>
        <li>qwqwqw</li>
        <li>0339083232</li>
        <li>asa@gmail.com</li>
        <li>xczxc</li>
        <li>Hà Quảng Cao Bằng</li>
      </ul>
    </div>
  )
}

const ItemCardProduct = () => {
  return (
    <div className="item-cart productid-11088257">
      <div style={{ width: "18%" }} className="image">
        <Link
          className="product-image"
          title="Salad Tôm Và Cá Ngừ - シュリンプと鮪のサラダ"
          to="/food-name-pd,5556"
        >
          <img
            width={75}
            height="auto"
            alt="Salad Tôm Và Cá Ngừ - シュリンプと鮪のサラダ"
            src={images.sp103}
          />
        </Link>
      </div>
      <div style={{ width: "31%" }} className="a-left">
        <h2 className="product-name">
          <Link
            to="/food-name-pd,5556.html"
            title="Salad Tôm Và Cá Ngừ - シュリンプと鮪のサラダ"
          >
            Salad Tôm Và Cá Ngừ - シュリンプと鮪のサラダ
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
      <div style={{ width: "14%" }} className="a-center">
        <span>1</span>
      </div>
      <div style={{ width: "15%" }} className="a-center">
        <span className="cart-price">
          <span className="price">
            <span className="pricetext">200.000</span>
            <span className="currencytext">đ</span>
          </span>
        </span>
      </div>
    </div>
  )
}