import React from 'react';
import { Link } from 'react-router-dom';
import Banner from 'src/components/Banner/Banner';
import Helmet from 'src/components/Helmet/Helmet';
import PageAbout from 'src/components/PageAbout';
import MenuProd from 'src/components/Product/MenuProd';
import {DataCategory} from 'src/data/data';
import images from 'src/static/images/images';


const Product = () => {
  return (
    <Helmet title="Sản phẩm">
      <Banner />
      <main id="main" className="main clearfix">
        <PageAbout name="Thực đơn" nameJapan="麺類" />
        <div className="page-menu page-menu1 clearfix">
          <div className="container">
            <div className="menu-title menu-title1">
              <div data-example-id="togglable-tabs">
                <MenuProd />
                <div id="myTabContent" className="tab-content">
                  <div className="menu-product-content menu-product1-content">
                    {DataCategory.map((category) => {
                      const {id, name, nameJapan, url, img} = category;
                      return(
                        <div key={id} className="item-product">
                          <div className="box-img-product">
                            <Link
                              to={`/product/${url}`}
                              title={`${name} - ${nameJapan}`}
                            >
                              <img
                                src={images[img]}
                                alt={images[img]}
                              />
                            </Link>
                          </div>
                          <div className="box-info-product">
                            <h2>
                              <Link
                                to={`/product/${url}`}
                                title={`${name} - ${nameJapan}`}
                              >
                                <i className="bg-bip bg-bip-top"> </i>
                                {name} <br />
                                <span className="language-japan"> {nameJapan}</span>
                                <i className="bg-bip bg-bip-bottom"> </i>
                              </Link>
                            </h2>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Helmet>
  )
}

export default Product;