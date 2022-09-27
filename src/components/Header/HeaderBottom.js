import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {DataMenu} from 'src/data/data';

const HeaderBottom = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuChild, setShowMenuChild] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);


  const handleClick = () => {
    console.log("handle: ", width);
    setWidth(window.innerWidth);
    if (width >= 1025) setShowMenu(false);
    else if (width < 1025) setShowMenu(true);
  };
  useEffect(() => {
    // window.addEventListener("resize", handleClick);
    // return () => {
    //   window.removeEventListener("resize", handleClick);
    // };
    if (width >= 1025) setShowMenu(false);
    else if (width < 1025) {
      setShowMenu(true);
      setShowMenuChild(false);
    }
    console.log("width", width);
    console.log(window.innerWidth);
  }, [width]);
  // handleClick();
  // console.log(window.innerWidth);
  console.log('submenu',showMenuChild);
  console.log('menu', showMenu);
  return (
    <div className="header-bottom">
      <div className="container">
        <nav id="nav" className="nav clearfix">
          <div id="cssmenu" className="cssmenu">
            <div id="menu-line" style={{ width: "121px", left: "0px" }} />
            <div id="menu-button" onClick={() => setShowMenu(!showMenu)} />
            {!showMenu && (
              <ul className="">
                {DataMenu.map((item) => (
                  <li
                    key={item.id}
                    className={item.name === "Thực đơn" ? "has-sub" : ""}
                    onClick={(e) => setWidth(e.target.innerWidth) }
                  >
                    {item.id === 3 && (
                      <span
                        className="submenu-button"
                        onClick={() => setShowMenuChild(true)}
                      />
                    )}

                    <NavLink
                      to={item.url}
                      className={({ isActive }) => (isActive ? "active" : "")}
                      title={`${item.name} - ${item.nameJapan}`}
                    >
                      {item.name}
                      <br />
                      <span className="menu-language-japan">
                        {" "}
                        {item.nameJapan}
                      </span>{" "}
                    </NavLink>
                    {/* {console.log('id: ', item.id, showMenuChild)} */}
                    {item.id === 3 && showMenuChild && (
                      <ul>
                        {item.children.map((category) => {
                           <LiItem key={category.id} url={category.url} name={category.name} nameJapan={category.nameJapan} />
                        })}
                      </ul>
                    )}
                  </li>
                ))}
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
  const { url, name, nameJapan } = props;
  return (
    <li className=" ">
      <Link to={url} title={`${name} - ${nameJapan}`}>
        {name} <br />
        <span className="menu-language-japan"> {nameJapan}</span>{" "}
      </Link>
    </li>
  );
};

export default HeaderBottom;
