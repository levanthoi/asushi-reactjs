import React from 'react';
import { Link } from 'react-router-dom';
import Banner from 'src/components/Banner/Banner';
import Helmet from 'src/components/Helmet/Helmet';
import PageAbout from 'src/components/PageAbout';
import MenuProduct from 'src/components/Product/DataMenu';
import MenuProd from 'src/components/Product/MenuProd';



const Product = () => {
  return (
    <Helmet title="San pham">
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
                    {MenuProduct.map((item) => (
                      <div key={item.id} className="item-product">
                      <div className="box-img-product">
                        <Link
                          to={item.link}
                          title={`${item.name} - ${item.nameJapan}`}
                        >
                          <img
                            src={item.img}
                            alt={item.img}
                          />
                        </Link>
                      </div>
                      <div className="box-info-product">
                        <h2>
                          <Link
                            to={item.link}
                            title={`${item.name} - ${item.nameJapan}`}
                          >
                            <i className="bg-bip bg-bip-top"> </i>
                            {item.name} <br />
                            <span className="language-japan"> {item.nameJapan}</span>
                            <i className="bg-bip bg-bip-bottom"> </i>
                          </Link>
                        </h2>
                      </div>
                    </div>
                    ))}
                    
                   
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