import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import images from "src/static/images/images";
import Banner from "../Banner/Banner";
import PageAbout from "../PageAbout";
import {DataNews} from "src/data/data";

const NewDetail = () => {
  const {newId} = useParams();
  const itemNew = DataNews.filter(item => item.id === newId-0)[0];
  // const [new, setNew] = useState();
  // console.log(itemNew);
  // useEffect (() => {

  // }, [newId])
  const { title, content, image} = itemNew;
  return (
    <>
      <Banner />
      <main id="main" className="main clearfix">
        <PageAbout name="Tin tức" nameJapan="麺類" />
        <div className="page-new page-new2 clearfix">
          <div className="container">
            <div className="new-content new-content2">
              <div className="box-description box-description-new">
                <h1>{title}</h1>
                <div
                  className="box-img-main-franchise-en"
                  style={{ lineHeight: "20.8px" }}
                >
                  <p>
                    {content}
                  </p>
                  <p>
                    {content}
                  </p>
                  <img
                    alt=""
                    src={images[image[2]]}
                    style={{ width: 524, height: 323 }}
                  />
                  &nbsp;
                  <img
                    alt=""
                    src={images[image[1]]}
                    style={{ width: 524, height: 323 }}
                  />
                  <p>
                    {content}
                  </p>
                  <p>
                    {content}
                  </p>
                  <img
                    alt=""
                    src={images[image[3]]}
                    style={{ width: 524, height: 323 }}
                  />
                  &nbsp;
                  <img
                    alt=""
                    src={images[image[2]]}
                    style={{ width: 524, height: 323 }}
                  />
                  <p>
                    {content}
                  </p>
                  <p>
                    {content}
                  </p>
                </div>
                <div>
                  <div data-field="body">
                    <p>&nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NewDetail;
