import React from 'react';
import LogoImg from '../../images/logo.webp';
import './Logo.css';

function Logo() {
  return (
    <div className="ma4 mt0">
      <img src={LogoImg} alt="logo" width={100} height={100}/>
    </div>
  );
}

export default Logo;
