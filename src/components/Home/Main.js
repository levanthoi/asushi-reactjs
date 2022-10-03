import React from "react";
import CardBanner from "src/components/Home/CardBanner";
import CardContent from "src/components/Home/CardContent";
import CardSlider2 from "src/components/Home/CardSlider2";
import { DataHome } from "src/data/data";

const Main = () => {
    // console.log(banner);
  return (
    <main id="main" className="main clearfix">
        {DataHome.map(item => {
            if(item.id === 51) return <CardSlider2 key={item.id} />
            if(!item.img) return <CardContent key={item.id} item={item}/>
            else return <CardBanner key={item.id} item={item}/>
        })}
    </main>
  );
};

export default Main;
