import React from "react";
import { useNavigate } from "react-router-dom";

export interface EventCardProps {
  index: number;
  num: string;
  imagePath: string;
  title: string|null;
  createdate: string|null;
}

const imageBase = "https://file.truefriend.com/Storage/mobile/event/eventQ";

function EventCard(props: EventCardProps) {
  const { index, num, title, createdate } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${num}`, { state: { title : title, dateRange : createdate } });
    console.log(num);
  };

  return (
    <div className="event-card" onClick={handleClick}>
      <img className="event-card-image" src={`${imageBase}${index + 70}_banner.png`} alt="" />
    </div>
  );
}

export default EventCard;