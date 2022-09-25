import React from "react";
import BoxItem from "./BoxItem";

const MeetTeam = () => {
  return (
    <div className="ashahi-about-us ashahi-about-us2 clearfix">
      <div className="container">
        <div className="ashahi-about-us-title ashahi-about-us2-title">
          <div className="title-about">
            <h2>meet our team</h2>
          </div>
          <div className="content-about">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitatio.
            </p>
          </div>
        </div>
        <div className="ashahi-about-us-content ashahi-about-us2-content clearfix">
          <div className="row-about-us2">
           <BoxItem />
           <BoxItem />
           <BoxItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
