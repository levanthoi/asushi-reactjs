import React from 'react';
import Banner from 'src/components/Banner/Banner';
import Helmet from 'src/components/Helmet/Helmet';
import CardNew from 'src/components/New/CardNew';
import PageAbout from 'src/components/PageAbout';

const New = () => {
  return (
    <Helmet title="Tin tức">
      <Banner />
      <main id="main" className="main clearfix">
        <PageAbout name="Tin tức" nameJapan="麺類" />
        <div className="page-new page-new1 clearfix">
          <div className="container">
            <div className="new-content new-content1" style={{ marginBottom: 20 }}>
              <div className="row">
                <CardNew />
                <CardNew />
                <CardNew />
                <CardNew />
                <CardNew />
                <CardNew />
                
              </div>
            </div>
            <div
              className="news-page"
              style={{ marginBottom: 68, textAlign: "center" }}
            ></div>
          </div>
        </div>

      </main>
    </Helmet>
  )
}

export default New