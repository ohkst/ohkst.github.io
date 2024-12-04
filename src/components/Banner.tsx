import React from 'react';
import '../styles/Banner.css';

interface BannerProps {
    bannerName: string;
    pagination: number;
    destination: string;
}

function Banner({
    bannerName,
    pagination,
    destination
  }: BannerProps) {
    console.log('banner');

    const handleBannerClick = () => {
      if (window.Android) {
        window.Android.moveScreen(destination);
      } else if (window.webkit && window.webkit.messageHandlers) {
        // iOS 네이티브 함수 호출
        if (window.webkit.messageHandlers.moveScreen) {
          window.webkit.messageHandlers.moveScreen.postMessage(destination);
        }
      } else {
        console.warn("Mobile 환경이 아님");
      }
    };

    return (
      <label>
        <img className={bannerName} onClick={() => handleBannerClick} alt=''/>
      </label>
    );
  }
  
export default Banner; 
