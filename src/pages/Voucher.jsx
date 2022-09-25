import React from 'react'
import Banner from 'src/components/Banner/Banner'
import Helmet from 'src/components/Helmet/Helmet'
import PageAbout from 'src/components/PageAbout'
import CardVoucher from 'src/components/Voucher/CardVoucher'

const Voucher = () => {
  return (
    <Helmet title="Voucher">
      <Banner />
      <main id="main" className="main clearfix">
        <PageAbout name="Voucher" nameJapan="麺類" />
          <div className="page-voucher page-voucher1 clearfix">
            <div className="container">
              <div className="voucher-title voucher-title1"></div>
              <div className="voucher-content voucher-content1">
                <div className="row">
                  <CardVoucher title='Voucher Gia Viên' />                  
                  <CardVoucher title='Voucher Gia Viên 2' />                  
                  <CardVoucher title='Voucher Gia Viên 3' />                  
                </div>
              </div>
            </div>
          </div>
          <div className="loading-shoppingcart" style={{ display: "none" }}>
            Loading...
          </div>
      </main>
    </Helmet>
  )
}

export default Voucher