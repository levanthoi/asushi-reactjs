import React from "react";
import Banner from "../Banner/Banner";

const ChooseUs = () => {
  return (
    <>
      <Banner />
      <main id="main" className="main clearfix">
        <div className="page-about-us">
          <div className="container">
            <div className="page-about-us-title">
              <h2>
                <i className="bg-pau bg-pau-left"> </i>
                Tin tức <br />
                <span className="language-japan">ニュース</span>
                <i className="bg-pau bg-pau-right"> </i>
              </h2>
            </div>
          </div>
        </div>
        <div className="page-new page-new2 clearfix">
          <div className="container">
            <div className="new-content new-content2">
              <div className="box-description box-description-new">
                <h1>Why choose us ?</h1>
                <p>
                  <span
                    style={{
                      color: "rgb(34, 34, 34)",
                      fontFamily: "Consolas Lucida Console monospace",
                      fontSize: 12,
                      whiteSpace: "pre-wrap",
                      backgroundColor: "rgb(255, 255, 255)",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque quis eros lobortis, vestibulum turpis ac,
                    pulvinar odio. Praesent vulputate a elit ac mollis. In sit
                    amet ipsum turpis. Pellentesque venenatis, libero vel
                    euismod lobortis, mi metus luctus augue, eget dapibus elit
                    nisi eu massa.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Pellentesque quis eros lobortis, vestibulum
                    turpis ac, pulvinar odio. Praesent vulputate a elit ac
                    mollis. In sit amet ipsum turpis. Pellentesque venenatis,
                    libero vel euismod lobortis, mi metus luctus augue, eget
                    dapibus elit nisi{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChooseUs;
