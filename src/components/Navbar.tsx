import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import backIcon from '../images/ic_navi_back_24.png';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const titleMap: { [key: string]: string } = {
    '/': '이벤트',
    '/event/:id': '이벤트 상세',
  };

  const getTitleName = () => {
    return location.pathname.startsWith('/event/') ? '이벤트 상세' : titleMap[location.pathname];
  };

  return (
    <nav id="naviHeader">
      <span onClick={handleBackButtonClick}>
        <img className="imgNaviBack" src={backIcon} alt="" />
      </span>
      <li id="naviTitle">{getTitleName()}</li>
    </nav>
  );
}

export default Navbar;