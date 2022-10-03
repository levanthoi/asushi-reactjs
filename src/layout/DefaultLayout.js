import React from 'react';
import Header from 'src/components/Header/Header';
import Footer from '../components/Footer/Footer';
import 'src/static/css/css';
import 'src/static/css/main.min.scss';
import 'src/static/css/owl.carousel.css';
import 'src/static/css/style-menu.scss';
import 'src/static/css/style.scss';
import 'src/static/css/product.scss';
import 'src/static/css/book.scss';

const DefaultLayout = ({children}) => {
  return (
    // <div className="main-global">
      <div className="style-global main-global">
        <div  className="style-menu">
            <Header />
        </div>
            {/* <div className=""> */}
                <div className="">{children}</div>
            {/* </div> */}
            <Footer />
        {/* </div> */}
      </div>  
    // </div>
  )
}

export default DefaultLayout;