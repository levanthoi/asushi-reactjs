import React from "react";
import { NavLink } from "react-router-dom";
import Helmet from "src/components/Helmet/Helmet";
// import "src/static/css/product.scss";

const payment = [
  { id: 1, link: "/cart", title: "Giỏ hàng" },
  { id: 2, link: "/paymentDetail", title: "Thanh toán" },
  { id: 3, link: "/bill", title: "Hóa đơn" },
];

const SecondLayout = ({ children }) => {
  return (
    <Helmet title="Thanh toán">
      <div className="product-global main-global">
        <div className="content-wrap">
          <div className="shopping-cart-page payment-step1-page">
            <section id="cart" className="cart">
              <div className="container">
                <div className="process-payment">
                  <ul>
                    {payment.map(({ id, link, title }) => (
                      <li key={id}>
                        <NavLink
                          to={link}
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          {title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                {children}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default SecondLayout;
