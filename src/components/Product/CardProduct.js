import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import images from "src/static/images/images";
import Banner from "../Banner/Banner";
import PageAbout from "../PageAbout";
import MenuProd from "./MenuProd";
import {DataProduct} from 'src/data/data';
import {DataCategory} from 'src/data/data';

const CardProduct = () => {
  const {productId} = useParams();
  const product = DataProduct.filter((product) => product.url_slug === productId)
  const [listProduct, setListProduct] = useState(product);
  const category = DataCategory.filter((menu) => menu.url === productId)
  useEffect (() => {
    const category = DataCategory.filter((menu) => menu.url === productId)
    const product = DataProduct.filter((product) => product.categoryId === category[0].id)
    setListProduct(product);
  },[productId])

  // thay đổi số lượng mua
  const [count, setCount] = useState(1);
  const inCrease = () => {
    return (
      setCount(pre => pre+1)
    )
  }
  const deCrease = () => {
    return (
      count<=1 ? setCount(1) : setCount(pre => pre -1)
    )
  }
  const updateCartItem = (v) => {
    console.log(v);
  }
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
                        {/* {console.log("list: ",listProduct)} */}
                          <Link
                            to={`/product/${listProduct[0].url_slug}`}
                            title="Khai vị - アペタイザー"
                          >
                            <img
                              src={images[category[0].img]}
                              alt="Khai vị - アペタイザー"
                            />
                          </Link>
                        </div>
                        <div className="box-info-product">
                          <h2>
                            <Link
                              to={`/product/${listProduct[0].url_slug}`}
                              title={`${category[0].name} - ${category[0].nameJapan}`}
                            >
                              <i className="bg-bip bg-bip-top"> </i>
                              {category[0].name} <br />
                              <span className="language-japan">
                                {" "}
                                {category[0].nameJapan}
                              </span>
                              <i className="bg-bip bg-bip-bottom"> </i>
                            </Link>
                          </h2>
                        </div>
                      </div>
                      <div className="list-item-product">
                        <div className="row">
                          {listProduct.map((item) => (
                            <div key={item.id} className="col-list col-md-4 col-sm-6 col-xs-6">
                              <div className="col-list-content">
                                <div className="box-img box-img-product-list">
                                  <Link
                                    to={`/product/${listProduct[0].url_slug}/food-name-${item.id}`}
                                    title={`${item.name} - ${item.nameJapan}`}
                                  >
                                    <img
                                      src={images[item.img]}
                                      alt={`${item.name} - ${item.nameJapan}`}
                                    />
                                  </Link>
                                </div>
                                <div className="box-info-product-list">
                                  <h4>
                                    <Link
                                      to={`/product/${listProduct[0].url_slug}/food-name-${item.id}`}
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
                                        className="reduction"
                                        onClick = {deCrease}
                                      />
                                      <input
                                        type="number"
                                        className="qty-5556 form-control sc-quantity"
                                        max-lenght={3}
                                        value={count}
                                        onChange={(value) => updateCartItem(value)}
                                        name="qty"
                                        max={100}
                                        min={0}
                                        step={0}
                                      />
                                      <div
                                        className="increase"
                                        onClick={inCrease}
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
