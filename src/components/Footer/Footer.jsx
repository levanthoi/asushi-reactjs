import React from 'react';
import images from 'src/static/images/images';

const Footer = () => {
  return (
    <>

      <footer id="footer" className="footer clearfix">
        <div className="container">
          <div className="footer-top clearfix">
            <div className="footer-top-left">
              <div className="ftl-content">
                <ul>
                  <li>
                    {/* <a> */}
                    <img src={images.appStore} alt="app store" title="app store" />
                    {/* </a> */}
                  </li>
                  <li>
                    {/* <a> */}
                    <img src={images.googlePlay} alt="google play" title="google play" />
                    {/* </a> */}
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-top-right">
              <div className="ftr-content">
                <div className="ftr-content-top">
                  <div className="ftr-address ftr-address1">
                    <span className="text-bold">Asahi Sushi 1 :</span>{" "}
                    <span className="text-nomarl">
                      Địa chỉ: 288 Bà Triệu - Hai Bà Trưng - Hà Nội/ Điện thoại:
                      (84)4. 39745945
                    </span>
                  </div>
                  <div className="ftr-address ftr-address1">
                    <span className="text-bold">Asahi Sushi 2 :</span>{" "}
                    <span className="text-nomarl">
                      Địa chỉ: 76 Triệu Việt Vương - Hai Bà Trưng - Hà Nội/ Điện
                      thoại: (84)4. 39447966
                    </span>
                  </div>
                </div>
                <div className="ftr-content-bottom">
                  <div className="ftr-copyright">
                    <span />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="footer-top-scroll"
              id="footer-top-scroll"
              style={{ display: "block", opacity: "0.0568982" }}
            >
              <div title="Scroll Back to Top">
                <i className="icon icon-scroll"> </i>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="support-in">
        <div className="panel panel-default categorybox">
          <div className="panel-body">
            <ul>
              <li>
                {" "}
                <a href="http://facebook.com/" target="_blank" rel="noreferrer">
                  <i className="icon-fb" />
                </a>
              </li>
              <li className="hotline">
                <span />
                <span style={{ color: "red" }}>0968 266 266</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer