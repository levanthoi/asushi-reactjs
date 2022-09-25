import React from 'react';
import Helmet from 'src/components/Helmet/Helmet';
import CardSlider from 'src/components/Home/CardSlider';
import Main from 'src/components/Home/Main';
const Home = () => {
  return (
    <Helmet title="Trang chủ">
      <CardSlider />
      <Main />
    </Helmet>
  )
}

export default Home