import React from 'react';
import CardAbout from 'src/components/About/CardAbout';
import Banner from 'src/components/Banner/Banner';
import Helmet from 'src/components/Helmet/Helmet';
import { DataAbout } from 'src/data/data';


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
        {DataAbout.map(item => {
          return <CardAbout key={item.id} item={item} />
        })}
      </main>

    </Helmet>
  )
}

export default About;