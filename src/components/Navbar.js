import React from 'react';
import { useNavigate } from 'react-router-dom';

import backIcon from '../images/ic_navi_back_24.png'

function Navbar() {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <nav id="naviHeader">
      <span onClick={handleBackButtonClick}>
        <img className="imgNaviBack" src={backIcon} alt="" />
      </span>
      <li id="brand">이벤트</li>
    </nav>
  );
}

export default Navbar;