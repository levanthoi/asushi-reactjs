import React from "react";
import { Link } from "react-router-dom";
import images from "src/static/images/images";
import Banner from "../Banner/Banner";
import PageAbout from "../PageAbout";
import MenuProd from "./MenuProd";


const ProductDetail = () => {
  return (
    <>
      <Banner />
      <main id="main" className="main clearfix">
        <PageAbout name="Thực đơn" nameJapan="麺類" />
        <div classname="page-menu page-menu2 clearfix">
          <div classname="container">
            <div classname="menu-title menu-title2">
              <div classname="menu-product-content menu-product2-content">
                <div data-example-id="togglable-tabs">
                  <MenuProd />
                  <div id="myTabContent" className="tab-content">
                    <div
                      role="tabpanel"
                      className="tab-pane fade in active"
                      id="product-1"
                      aria-labelledby="product-1-tab"
                    >
                      <div
                        className="detail-item-product"
                        id="product-detail-info"
                      >
                        <div className="row">
                          <div className="col-detail col-sm-6 col-xs-12">
                            <div className="box-img box-img-product-detail">
                              <a
                                href="!#"
                                title="Salad Tôm Và Cá Ngừ -  シュリンプと鮪のサラダ"
                              >
                                <img
                                  src={images.imgspmenu2}
                                  alt="Salad Tôm Và Cá Ngừ -  シュリンプと鮪のサラダ"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-detail col-sm-6 col-xs-12">
                            <div className="box-info-product-detail">
                              <h1>
                                Salad Tôm Và Cá Ngừ <br />
                                <span> シュリンプと鮪のサラダ</span>
                              </h1>
                              <div className="box-price clearfix">
                                <span className="price">40.000 VND</span>
                              </div>
                              <div className="description-detail">
                                <p>
                                  Ei est doctus persius. Cum cu putant iuvaret
                                  voluptatibus, eu dolore primis vix, singulis
                                  accusamus te quo. Homero saperet iudicabit ut
                                  eum, et eam everti abhorreant, eos essent
                                  dolores scriptorem ut. Tibique epicuri no vis,
                                  quo epicuri appareat id.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt.Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit, sed do eiusmod
                                  tempor incididunt.
                                </p>
                              </div>
                              <div className="box-product-list-bottom box-product-detail-bottom clearfix">
                                <div className="box-qty clearfix">
                                  <a
                                    href="!#"
                                    id="reduction"
                                    className="reduction"
                                  />
                                  <input
                                    id="product_quantity"
                                    type="number"
                                    className="form-control sc-quantity"
                                    max-lenght={3}
                                    defaultValue={1}
                                    name="qty"
                                    min={0}
                                    step={0}
                                  />
                                  <a
                                    href="!#"
                                    id="increase"
                                    className="increase"
                                  />
                                </div>
                                <div className="box-add-cart">
                                  <Link
                                    data-params="#product-detail-info"
                                    className="addtocart"
                                    to="/product"
                                    title="chọn món"
                                  >
                                    chọn món
                                  </Link>
                                </div>
                              </div>
                              <div className="detail-booking">
                                ĐẶT BÀN NGAY : <a href="tel:" title="#" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
