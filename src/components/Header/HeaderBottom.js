import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderBottom = () => {
  const nav_links = [
    {
      id: 1,
      display: "Trang chủ",
      title: "Trang chủ - 杉屋について",
      link: "/",
    },
    {
      id: 2,
      display: "Giới thiệu",
      title: "Chúng tôi - 杉屋について",
      link: "/about",
    },
    {
      id: 3,
      display: "Thực đơn",
      title: "Thực đơn - お品書き",
      link: "/product",
    },
    {
      id: 4,
      display: "Khuyến mại",
      title: "Khuyến mại - プロモーション",
      link: "/promotion",
    },
    {
      id: 5,
      display: "Voucher",
      title: "Voucher - クーポン",
      link: "/voucher",
    },
    {
      id: 6,
      display: "Đặt bàn",
      title: "Đặt bàn - 貸し切り",
      link: "/book",
    },
    {
      id: 7,
      display: "Tin tức",
      title: "Tin tức - >ニュース",
      link: "/new",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [showMenuChild, setShowMenuChild] = useState(false);

  // const handleClick = () => {
  //   console.log("ass");
  // };
  console.log(showMenu);

  return (
    <div className="header-bottom">
      <div className="container">
        <nav id="nav" className="nav clearfix">
          <div id="cssmenu" className="cssmenu">
            <div id="menu-line" style={{ width: "121px", left: "0px" }} />
            <div id="menu-button" onClick={() => setShowMenu(!showMenu)} />
            {!showMenu && (
              <ul className="">
                {nav_links.map((item) => (
                  <li
                    key={item.id}
                    className={item.display === "Thực đơn" ? "has-sub" : ""}
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    {item.display === "Thực đơn" && (
                      <span
                        className="submenu-button"
                        onClick={() => setShowMenuChild(!showMenuChild)}
                      />
                    )}

                    <NavLink
                      to={item.link}
                      className={({ isActive }) => (isActive ? "active" : "")}
                      title={item.title}
                    >
                      {item.display}
                      <br />
                      <span className="menu-language-japan">
                        {" "}
                        杉屋について
                      </span>{" "}
                    </NavLink>
                    {item.display==='Thực đơn' && showMenuChild && (
                      <ul>
                        <LiItem name="Khai vị" nameJapan="アペタイザー" />
                        <LiItem name="Món nướng" nameJapan="焼き" />
                        <LiItem name="Sashimi, sushi" nameJapan="刺身 , 寿司" />
                        <LiItem name="Món chiên " nameJapan="揚げ" />
                        <LiItem name="Món chiên " nameJapan="揚げ" />
                        <LiItem name="Cơm, cháo " nameJapan="米, ポリッジ" />
                        <LiItem name="Món mì" nameJapan="麺類" />
                        <LiItem name="Món mì" nameJapan="麺類" />
                        <LiItem name="Teppanyaki" nameJapan="鉄板焼き" />
                        <LiItem name="Món om" nameJapan="煮る" />
                        <LiItem name="Món lẩu" nameJapan="鍋" />
                        <LiItem name="Món đặc biệt" nameJapan="?" />
                      </ul>
                    )}
                  </li>
                ))}
                {/* <li className="has-sub">
                <span className="submenu-button" />
                <a href="/pages/san-pham.html" title="Thực đơn - お品書き">
                  Thực đơn <br />
                  <span className="menu-language-japan"> お品書き</span>{" "}
                </a>
                
              </li> */}
              </ul>
            )}
          </div>
        </nav>
        <div className="header-bottom-facebook">
          <a rel="noreferrer" href="http://facebook.com/" target="_blank">
            <i className="icon icon-facebook"> </i>
          </a>
        </div>
      </div>
    </div>
  );
};

const LiItem = (props) => {
  const { name, nameJapan } = props;
  return (
    <li className=" ">
      <Link to="/khai-vi-pc,5699" title={`${name} - ${nameJapan}`}>
        {name} <br />
        <span className="menu-language-japan"> {nameJapan}</span>{" "}
      </Link>
    </li>
  );
};

export default HeaderBottom;
