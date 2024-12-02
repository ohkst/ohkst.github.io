import React from "react";
// import { useNavigate } from "react-router-dom";

export interface EventCardProps {
  index: number;
  num: string;
  imagePath: string;
  title: string|null;
  createdate: string|null;
}

const imageBase = "https://file.truefriend.com/Storage/mobile/event/eventQ";

function EventCard(props: EventCardProps) {
  const { index, num } = props;
  // const navigate = useNavigate();

  const handleClick = () => {
    // navigate(`/event/${num}`, { state: { title : title, dateRange : createdate } });
    // console.log(num);

    if (window.Android) {
      // Android 네이티브 함수 호출
      console.warn("Android");
      window.Android.moveEventDetail(num);
    } else if (window.webkit && window.webkit.messageHandlers) {
      // iOS 네이티브 함수 호출
      console.warn("iOS");

      if (window.webkit.messageHandlers.moveEventDetail) {
        window.webkit.messageHandlers.moveEventDetail.postMessage(num);
      }
    } else {
      console.warn("Mobile 환경이 아님");
    }

  };

  return (
    <div className="event-card" onClick={handleClick}>
      <img className="event-card-image" src={`${imageBase}${index + 70}_banner.png`} alt="" />
    </div>
  );
}

export default EventCard;