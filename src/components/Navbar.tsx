import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import backIcon from '../images/ic_navi_back_24.png';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackButtonClick = () => {
    if (window.Android) {
      // Android 네이티브 함수 호출
      console.warn("Android");
      window.Android.showToast("안드로이드 네이티브 호출");

    } else if (window.webkit && 
      window.webkit.messageHandlers && 
      window.webkit.messageHandlers.back) {
      // iOS 네이티브 함수 호출
      console.warn("iOS");
      // window.webkit.messageHandlers.back.postMessage("back");

      if (window.webkit.messageHandlers.moveEventDetail) {
        window.webkit.messageHandlers.moveEventDetail.postMessage("");
      }

      if (window.webkit.messageHandlers.needLogin) {
        window.webkit.messageHandlers.needLogin.postMessage("");
      }

      if (window.webkit.messageHandlers.getAccountAlias) {
        window.webkit.messageHandlers.getAccountAlias.postMessage("");
      }

      if (window.webkit.messageHandlers.getAppNoticeList) {
        window.webkit.messageHandlers.getAppNoticeList.postMessage("");
      }

      if (window.webkit.messageHandlers.getMobileNoticePopup) {
        window.webkit.messageHandlers.getMobileNoticePopup.postMessage("");
      }

      if (window.webkit.messageHandlers.getAutoTradingCheck) {
        window.webkit.messageHandlers.getAutoTradingCheck.postMessage("");
      }

      if (window.webkit.messageHandlers.getBankisStock) {
        window.webkit.messageHandlers.getBankisStock.postMessage("");
      }

      if (window.webkit.messageHandlers.getBankisDollar) {
        window.webkit.messageHandlers.getBankisDollar.postMessage("");
      }

      if (window.webkit.messageHandlers.getOverseasStock) {
        window.webkit.messageHandlers.getOverseasStock.postMessage("");
      }
  
      
    } else {
      console.warn("Mobile 환경이 아님");
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