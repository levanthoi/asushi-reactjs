import React from "react";
import { Link } from "react-router-dom";
import images from "src/static/images/images";
import Banner from "../Banner/Banner";
import PageAbout from "../PageAbout";
import MenuProd from "./MenuProd";
import {ProductList} from './DataMenu';

const CardProduct = () => {
  return (
    <>
      <Banner />
      <main id="main" className="main clearfix">
        <PageAbout name="Thực đơn" nameJapan="麺類" />
        <div className="page-menu page-menu2 clearfix">
          <div className="container">
            <div className="menu-title menu-title2">
              <div className="menu-product-content menu-product2-content">
                <div data-example-id="togglable-tabs">
                  <MenuProd />
                  <div id="myTabContent" className="tab-content">
                    <div
                      role="tabpanel"
                      className="tab-pane fade in active"
                      id="product-1"
                      aria-labelledby="product-1-tab"
                    >
                      <div className="item-product item-product2">
                        <div className="box-img-product">
                          <Link
                            to="/khai-vi-pc,5699"
                            title="Khai vị - アペタイザー"
                          >
                            <img
                              src={images.khaivi}
                              alt="Khai vị - アペタイザー"
                            />
                          </Link>
                        </div>
                        <div className="box-info-product">
                          <h2>
                            <Link
                              to="/khai-vi-pc,5699"
                              title="Khai vị - アペタイザー"
                            >
                              <i className="bg-bip bg-bip-top"> </i>
                              Khai vị <br />
                              <span className="language-japan">
                                {" "}
                                アペタイザー
                              </span>
                              <i className="bg-bip bg-bip-bottom"> </i>
                            </Link>
                          </h2>
                        </div>
                      </div>
                      <div className="list-item-product">
                        <div className="row">
                          {ProductList.map((item) => (
                            <div key={item.id} className="col-list col-md-4 col-sm-6 col-xs-6">
                              <div className="col-list-content">
                                <div className="box-img box-img-product-list">
                                  <Link
                                    to="/food-name-pd,5556"
                                    title={`${item.name} - ${item.nameJapan}`}
                                  >
                                    <img
                                      src={item.img}
                                      alt={`${item.name} - ${item.nameJapan}`}
                                    />
                                  </Link>
                                </div>
                                <div className="box-info-product-list">
                                  <h4>
                                    <Link
                                      to="/food-name-pd,5556"
                                      title={`${item.name} - ${item.nameJapan}`}
                                    >
                                      {item.name}<br />
                                      <span> {item.nameJapan}</span>
                                    </Link>
                                  </h4>
                                  <div className="box-price clearfix">
                                    <span className="price">{item.price} VND</span>
                                  </div>
                                  <div className="box-product-list-bottom clearfix">
                                    <div className="box-qty clearfix">
                                      <div
                                        href="/"
                                        onclick="reductionQty(this)"
                                        className="reduction"
                                      />
                                      <input
                                        type="number"
                                        className="qty-5556 form-control sc-quantity"
                                        max-lenght={3}
                                        defaultValue={1}
                                        name="qty"
                                        max={100}
                                        min={0}
                                        step={0}
                                      />
                                      <div
                                        href="/"
                                        onclick="increaseQty(this)"
                                        className="increase"
                                      />
                                    </div>
                                    <div className="box-add-cart">
                                      <a
                                        href = "!#"
                                        className="btn_add_food"
                                        name={5556}
                                        title="chọn món"
                                      >
                                        chọn món
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
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

export default CardProduct;
