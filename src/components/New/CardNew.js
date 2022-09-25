import React from "react";
import { Link } from "react-router-dom";
import images from "src/static/images/images";

const CardNew = () => {
  return (
    <div className="col-new col-sm-6 col-xs-6">
      <div className="col-new-content">
        <div className="box-img box-img-new">
          <Link
            to="/huong-vi-tinh-khiet-len-ngoi-nd-2038"
            title="Khuyến mãi cho set ăn Hải sản"
          >
            <img
              src={images.new1}
              alt="Khuyến mãi cho set ăn Hải sản"
            />
          </Link>
        </div>
        <div className="box-info-new">
          <div className="box-info-new-title">
            <h3>
              <Link
                to="/huong-vi-tinh-khiet-len-ngoi-nd-2038"
                title="Khuyến mãi cho set ăn Hải sản"
              >
                Khuyến mãi cho set ăn Hải sản{" "}
              </Link>
            </h3>
          </div>
          <div className="description-new">
            <p>
              Nhân dịp năm mới , Nhà hàng Gia Viên xin gửi đến quý khách hàng
              chương trình đặc biệt với những ưu đãi vô cùng hấp dẫn: giảm giá
              cho set ăn từ 4-6 người, tặng voucher giảm giá:
              <br />
              <br />
              Giảm giá 15 % cho set ăn 4-6 người
              <br />
              <br />
              Giảm 20 % cho set ăn trên 6 người
              <br />
              <br />
              Giảm giá 20 % cho đồ ăn Hải sản
            </p>
          </div>
          <div className="box-view box-view-new">
            <Link
              to="/huong-vi-tinh-khiet-len-ngoi-nd-2038"
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
