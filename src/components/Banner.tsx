import React from 'react';
import '../styles/Banner.css';

interface BannerProps {
    bannerName: string;
    pagination: number;
    destination: string;
    openData: string;
}

function Banner({
    bannerName,
    pagination,
    destination,
    openData
  }: BannerProps) {

    const handleBannerClick = (destination: string, openData: string) => {
      if (window.Android) {
        window.Android.moveScreen(`${destination}◆${openData}`);
      }
      else if (window.webkit && window.webkit.messageHandlers) {
          // iOS 네이티브 함수 호출
          if (window.webkit.messageHandlers.moveScreen) {
            window.webkit.messageHandlers.moveScreen.postMessage(`${destination}◆${openData}`);
          }
        } else {
          console.warn(destination);
        }
      };

    return (
      <label>
        <img className={bannerName} onClick={() => handleBannerClick(destination, openData)} alt=''/>
      </label>
    );
  }
  
export default Banner; 
