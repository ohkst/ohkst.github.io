import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import backIcon from '../images/ic_navi_back_24.png';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackButtonClick = () => {
    if (window.Android) {
      // Android 네이티브 함수 호출
      window.Android.showToast("안드로이드 네이티브 호출");
    } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iOS) {
      // iOS 네이티브 함수 호출
      window.webkit.messageHandlers.iOS.postMessage("back");
    } else {
      console.warn("WebView 환경이 아님");
      navigate(-1);
    }
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