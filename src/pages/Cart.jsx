import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from 'src/components/Cart/CartButton';
import CartItem from 'src/components/Cart/CartItem';

const Cart = () => {
  return (
    <div className="product-global">
      <>
        <div className="bg-cart-page hidden-xs">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div className="bg-scroll">
                <div className="cart-thead">
                  <div style={{ width: "18%" }}>Ảnh sản phẩm</div>
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
                    Tạm tính
                  </div>
                  <div style={{ width: "7%" }}>Xóa</div>
                </div>
                <div className="cart-tbody">
                  <CartItem />
                  <CartItem />
                </div>
              </div>
            </div>
            <div
              className="cart-collaterals col-lg-4 col-md-4 col-sm-12 col-xs-12"
              style={{ position: "static" }}
            >
              <div className="totals">
                <h3>Tổng cộng</h3>
                <div className="inner">
                  <table
                    className="table shopping-cart-table-total"
                    id="shopping-cart-totals-table"
                  >
                    <colgroup>
                      <col />
                      <col />
                    </colgroup>
                    <tfoot>
                      <tr>
                        <td colSpan={1} className="a-left">
                          <strong>Tổng tiền</strong>
                        </td>
                        <td>
                          <strong>
                            <span>
                              <span className="pricetext">400.000</span>
                              <span className="currencytext">đ</span>
                            </span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  <ul className="checkout">
                    <CartButton title='Tiến hành đặt Ngay' path="/payment" class1="btn-proceed-checkout" />
                    <CartButton title='Tiếp tục mua hàng' path="/product" class1="btn-continue" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-cart-page-mobile cart-droplist visible-xs">
          <div className="cart-droplist__content arrow_box">
            <div className="cart-droplist__status">
              <i className="fa fa-check" aria-hidden="true" />
              <span className="cart-counter-list">1</span> Sản phẩm trong giỏ hàng
            </div>
            <div className="mini-list">
              <p className="text-warning">Chưa có sản phẩm nào trong giỏ hàng</p>
              <div className="top-subtotal">
                Tổng cộng:
                <span className="price total-price">
                  <span className="pricetext">0</span>
                  <span className="currencytext">đ</span>
                </span>
              </div>
              <div className="actions">
                <button
                  className="btn-checkout"
                  type="button"
                  aria-label="Tiến hành đặt hàng"
                >
                  <Link to='/payment'>
                    <span>
                      <i className="fa fa-money" aria-hidden="true" /> Đặt hàng
                    </span>
                  </Link>

                </button>
                <button
                  className="btn-checkout btn-return"
                  type="button"
                  aria-label="Tiếp tục mua hàng"
                // onclick="window.location.href = '/product'"
                >
                  <Link to='/product'>
                    <span>
                      <i className="fa fa-arrow-circle-left" aria-hidden="true" />
                      Tiếp tục mua hàng
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>

    </div>

  )
}

export default Cart;