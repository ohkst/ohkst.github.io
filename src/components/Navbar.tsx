import React from 'react';
import { useNavigate } from 'react-router-dom';

import backIcon from '../images/ic_navi_back_24.png';

function Navbar() {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const titleMap = {
    '/': '이벤트',
    '/event/:id': '이벤트 상세',
  };

  function getTitleName(path) {
    if (path.startsWith('/event/')) {
      return '이벤트 상세';
    } else {
      return titleMap[path];
    }
  }

  return (
    <nav id="naviHeader">
      <span onClick={handleBackButtonClick}>
        <img className="imgNaviBack" src={backIcon} alt="" />
      </span>
      <li id="naviTitle">{getTitleName(window.location.pathname)}</li>
    </nav>
  );
}

export default Navbar;