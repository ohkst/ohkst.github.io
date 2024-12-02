import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import backIcon from "../images/ic_navi_back_24.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackButtonClick = () => {
    if (window.Android) {
      // Android 네이티브 함수 호출
      console.warn("Android");
      window.Android.back("");
      // window.Android.moveEventDetail("");
      // window.Android.moveScreen("");
      // window.Android.needLogin("");
      // window.Android.getAccountAlias("");
      // window.Android.getAppNoticeList("");
      // window.Android.getMobileNoticePopup("");
      // window.Android.getAutoTradingCheck("");
      // window.Android.getBankisStock("");
      // window.Android.getBankisDollar("");
      // window.Android.getOverseasStock("");
      
    } else if (window.webkit && window.webkit.messageHandlers) {
      // iOS 네이티브 함수 호출
      console.warn("iOS");

      if (window.webkit.messageHandlers.back) {
        window.webkit.messageHandlers.back.postMessage("back");
      }
    } else {
      console.warn("Mobile 환경이 아님");
      navigate(-1);
    }
  };

  const titleMap: { [key: string]: string } = {
    "/": "이벤트",
    "/event/:id": "이벤트 상세",
  };

  const getTitleName = () => {
    return location.pathname.startsWith("/event/")
      ? "이벤트 상세"
      : titleMap[location.pathname];
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
