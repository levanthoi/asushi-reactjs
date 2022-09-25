import React from "react";
import CardBanner from "src/components/Home/CardBanner";
import CardContent from "src/components/Home/CardContent";
import images from "src/static/images/images";
import CardSlider2 from "src/components/Home/CardSlider2";

const banner = [
    {
        id: 1,
        class: "ashahi1",
        title: "Asahi Sushi",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididu",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam colaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 2,
        class: "ashahi2",
        title: "Xem thêm về chúng tôi",
        style: images.banner1,
    },
    {
        id: 3,
        class: "ashahi3",
        title: "ASAHI SUSHI- NHỮNG HƯƠNG VỊ KỲ DIỆU",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididu",
    },
    {
        id: 4,
        class: "ashahi4",
        title: "Xem thực đơn của Asahi",
        style: images.banner2,
    },
    {
        id: 5,
        class: "ashahi5",
        title: "ASAHI SUSHI- KHÔNG GIAN ẨM THỰC NHẬT",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididu",
    },
    {
        id: 6,
        class: "ashahi6",
        title: "LỜI CẢM ƠN TỪ ASAHI SUSHI",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididu",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ducimus incidunt excepturi! Ducimus molestias cum numquam consectetur harum corrupti, voluptas quo, architecto reiciendis vitae voluptatibus dolorum nostrum accusantium sint modi!"
    },
];

const Main = () => {
    // console.log(banner);
  return (
    <main id="main" className="main clearfix">
      <CardContent title={banner[0].title} classText={banner[0].class} shortDescription={banner[0].shortDescription} description={banner[0].description}/>
      <CardBanner style={banner[1].style} classText={banner[1].class} title={banner[1].title} />
      <CardContent title={banner[2].title} classText={banner[2].class} shortDescription={banner[2].shortDescription} />
      <CardBanner style={banner[3].style} classText={banner[3].class} title={banner[3].title} />
      <CardContent title={banner[4].title} classText={banner[4].class} shortDescription={banner[4].shortDescription} />
      <CardSlider2 />
      <CardContent title={banner[5].title} classText={banner[5].class} shortDescription={banner[5].shortDescription} description={banner[5].description} />
    </main>
  );
};

export default Main;
