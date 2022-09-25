import React from "react";
import images from "src/static/images/images";
import Banner from "../Banner/Banner";
import PageAbout from "../PageAbout";

const NewDetail = () => {
  return (
    <>
      <Banner />
      <main id="main" className="main clearfix">
        <PageAbout name="Tin tức" nameJapan="麺類" />
        <div className="page-new page-new2 clearfix">
          <div className="container">
            <div className="new-content new-content2">
              <div className="box-description box-description-new">
                <h1>Khuyến mãi cho set ăn Hải sản</h1>
                <div
                  className="box-img-main-franchise-en"
                  style={{ lineHeight: "20.8px" }}
                >
                  <p>
                    Nếu như Sushi là biểu tượng của văn hóa ẩm thực Nhật Bản
                    trong các bữa tiệc truyền thống kết hợp hương vị của đồng
                    xanh và biển cả thì Sashimi chính là 'nữ hoàng' của hương vị
                    tinh khiết đến từ đại dương bao la.
                  </p>
                  <p>
                    Sashimi là một món ăn truyền thống Nhật Bản mà thành phần
                    chính chủ yếu là các loại hải sản tươi sống. Hải sản dùng để
                    làm Sashimi phải có "tiêu chuẩn sashimi", được đánh bắt bằng
                    các dụng cụ riêng biệt, ngay sau khi bắt được phải được xử
                    lý luôn theo quy trình đặc biệt để đảm bảo sự tươi ngon của
                    từng miếng Sashimi.
                  </p>
                  <img
                    alt="#"
                    src={images.new2}
                    title="#"
                  />
                  <img
                    alt=""
                    src={images.new3}
                    style={{ width: 524, height: 323 }}
                  />
                  &nbsp;
                  <img
                    alt=""
                    src={images.new2}
                    style={{ width: 524, height: 323 }}
                  />
                  <p>
                    Loại dao dùng để cắt Sashimi của các đầu bếp Nhật Bản được
                    ví như thanh kiếm báu của các võ sĩ Samurai, nhiều khi giá
                    trị lên tới vài nghìn USD. Sashimi thường được cắt thành
                    từng lát mỏng có chiều rộng khoảng 2,5cm, chiều dài 4cm và
                    dày chừng 0,5cm, nhưng kích cỡ có thể khác nhau tuỳ vào loại
                    nguyên liệu và đầu bếp.
                  </p>
                  <p>
                    Loại dao dùng để cắt Sashimi của các đầu bếp Nhật Bản được
                    ví như thanh kiếm báu của các võ sĩ Samurai, nhiều khi giá
                    trị lên tới vài nghìn USD. Sashimi thường được cắt thành
                    từng lát mỏng có chiều rộng khoảng 2,5cm, chiều dài 4cm và
                    dày chừng 0,5cm, nhưng kích cỡ có thể khác nhau tuỳ vào loại
                    nguyên liệu và đầu bếp.
                  </p>
                  <img
                    alt=""
                    src={images.new2}
                    style={{ width: 524, height: 323 }}
                  />
                  &nbsp;
                  <img
                    alt=""
                    src={images.new2}
                    style={{ width: 524, height: 323 }}
                  />
                  <p>
                    Các loại nước sốt đơn giản ăn với sashimi, như là sốt shoyu
                    (1 loại xì dầu Nhật Bản) và wasabi (mù tạt) các loại gia vị
                    như gừng. Và tất nhiên không thể bỏ qua các lại rau tía tô,
                    củ cải trắng và tảo biển.
                  </p>
                  <p>
                    Một số loại hải sản mà người Nhật thường hay dùng làm
                    sashimi là: cá hồi, cá ngừ, cá thu, cá saba, cá nóc, mực,
                    bạch tuộc, tôm biển. Ngoài ra, Sashimi còn được làm từ thịt
                    hay rau củ quả...Ika: Mực - Món ăn ngon, vị thuốc quý. Cá
                    mực là loại động vật không xương sống. Trong mai mực có các
                    muối canxi dưới dạng carbonat, phosphat, sulfat, các chất
                    hữu cơ và chất keo. Thịt cá mực cũng được dùng làm thuốc
                    nhưng không phổ biến. Trong thịt mực có protid, lipid, Ca,
                    p, Fe, vitamin B1, B2, B6, PP. Thịt cá mực có vị ngọt, chua,
                    tính bình, có tác dụng bổ trung, ích khí…Ika: Mực - Món ăn
                    ngon, vị thuốc quý. Cá mực là loại động vật không xương
                    sống. Trong mai mực có các muối canxi dưới dạng carbonat,
                    phosphat, sulfat, các chất hữu cơ và chất keo. Thịt cá mực
                    cũng được dùng làm thuốc nhưng không phổ biến. Trong thịt
                    mực có protid, lipid, Ca, p, Fe, vitamin B1, B2, B6, PP.
                    Thịt cá mực có vị ngọt, chua, tính bình, có tác dụng bổ
                    trung, ích khí…
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
