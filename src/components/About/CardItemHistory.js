import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';


const CardItemHistory = (props) => {
  const {id,name, img, desc} = props.item;
  return (
    <div className={`col-about-us1`}>
              <div className="box-title">
                <h3>
                  <Link
                    to={`/about/${id}`}
                    title={name}
                  >
                    {name}
                  </Link>
                </h3>
                <div className="about-us-description">
                  {desc}
                </div>
              </div>
              <div className="box-content">
                <Link
                  to={`/about/${id}`}
                  title={name}
                >
                  <img
                    src={img}
                    alt={name}
                  />
                </Link>
              </div>
            </div>
  )
}

export default CardItemHistory