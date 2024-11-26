import React from "react";
import { useNavigate } from "react-router-dom";

export interface EventCardProps {
  id: number;
  imagePath: string;
  title: string|null;
  dateRange: string|null;
  onClick?: () => void; // optional로 설정
}

function EventCard(props: EventCardProps) {
  const { id, title, dateRange } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${id}`, { state: { title : title, dateRange : dateRange } });
    console.log(id);
  };

  return (
    <div className="event-card" onClick={handleClick}>
      <img className="event-card-image" src={props.imagePath} alt="" />
    </div>
  );
}

export default EventCard;