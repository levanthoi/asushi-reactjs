import React from "react";
import {Link} from 'react-router-dom';

const HeaderTop = () => {
  return (
    <div className="header-top" style={{}}>
      <h1 style={{ textIndent: "-9999px", height: "0px", margin: "0px" }}>
        Ashahi
      </h1>
      <div className="container">
        <div className="header-top-left">
          <div className="login clearfix">
            <ul>
              <li>
                <Link to="/signup" >Đăng ký</Link>
              </li>
              <li>
                <Link to="/login" >Đăng nhập</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-top-right"></div>
      </div>
    </div>
  );
};

export default HeaderTop;
