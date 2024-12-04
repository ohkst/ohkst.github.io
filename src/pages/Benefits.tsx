import React from 'react';
import '../styles/Benefit.css';

function Benefits() {
    const handleBannerClick = (destination: string, openData: string) => {
        if (window.Android) {
          window.Android.moveScreen(destination, openData);
        }
        else if (window.webkit && window.webkit.messageHandlers) {
            // iOS 네이티브 함수 호출
            if (window.webkit.messageHandlers.moveScreen) {
              window.webkit.messageHandlers.moveScreen.postMessage(destination, openData);
            }
          } else {
            console.warn("Mobile 환경이 아님");
          }
        };
    return (
        <div className="benefits">
            <div id = "benefitBg">
                <div className = "btnGroup">
                    <button className="content-btn btn1" type="button" >대상 여부 조회</button>
                    <button className="content-btn btn2" type="button" onClick={() => handleBannerClick("3911","")}>해외거래서비스 신청하기</button>
                    <button className="content-btn btn3" type="button" >이벤트 신청하기</button>
                    <button className="content-btn btn4" type="button" >주식 추첨하기</button>
                    <button className="content-btn btn5" type="button" >미참가중</button>
                </div>
            </div>
        </div>
    );
}

export default Benefits;