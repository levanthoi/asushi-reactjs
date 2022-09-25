import React from 'react';
import History from 'src/components/About/History';
import MeetTeam from 'src/components/About/MeetTeam';
import Banner from 'src/components/Banner/Banner';
import Helmet from 'src/components/Helmet/Helmet';

// const dataAbout = [
//   {
//     id: 1,
//     classText: "us1",
//     title: "RA ĐỜI VÀO NĂM 2004",
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio."
    
//   },
//   {
//     id: 2,
//     classText: "us2",
//     title: "meet our team",
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio."

//   }
// ];

const About = () => {
  return (
    <Helmet title="Giới thiệu">
      <Banner />
      <main id="main" className="main clearfix">
        <div className="page-about-us">
          <div className="container">
            <div className="page-about-us-title"></div>
          </div>
        </div>
        <History />
        <MeetTeam />
      </main>

    </Helmet>
  )
}

export default About;