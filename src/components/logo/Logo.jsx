import React from 'react';
import LogoImg from '../../images/logo.webp';

function Logo() {
  return (
    <div className="m-4 mt-0">
      <img src={LogoImg} alt="logo" width={100} height={100}/>
    </div>
  );
}

export default Logo;