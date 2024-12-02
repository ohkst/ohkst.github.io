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

    const handleBannerClick = (destination: string) => {
      if (window.Android) {
        window.Android.moveScreen(destination);
      }
      };

    return (
      <label>
        <img className={bannerName} onClick={() => handleBannerClick(destination)} alt=''/>
      </label>
    );
  }
  
export default Banner; 
