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
        window.open(destination);
      };

    return (
      <label>
        <img className={bannerName} onClick={handleBannerClick} alt=''/>
      </label>
    );
  }
  
export default Banner; 
