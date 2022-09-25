import React from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderCenter from './HeaderCenter';
import HeaderTop from './HeaderTop';

const Header = () => {
  return (
    <header id="header" className="header clearfix">
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />
    </header>
  )
}

export default Header;