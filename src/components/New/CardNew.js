import React from "react";
import { Link } from "react-router-dom";
import images from "src/static/images/images";

const CardNew = (props) => {
  const {id, title, des, image} = props.itemNew;
  return (
    <div className="col-new col-sm-6 col-xs-6">
      <div className="col-new-content">
        <div className="box-img box-img-new">
          <Link
            to={`/new/${id}`}
            title={title}
          >
            <img
              src={images[image[0]]}
              alt={title}
            />
          </Link>
        </div>
        <div className="box-info-new">
          <div className="box-info-new-title">
            <h3>
              <Link
                to={`/new/${id}`}
                title={title}
              >
                {title}{" "}
              </Link>
            </h3>
          </div>
          <div className="description-new">
            <p>
              {des}
              <br />
              {/* <br />
              Giảm giá 15 % cho set ăn 4-6 người
              <br />
              <br />
              Giảm 20 % cho set ăn trên 6 người
              <br />
              <br />
              Giảm giá 20 % cho đồ ăn Hải sản */}
            </p>
          </div>
          <div className="box-view box-view-new">
            <Link
              to={`/new/${id}`}
              title="XEM TIẾP ...."
            >
              XEM TIẾP ....
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNew;
