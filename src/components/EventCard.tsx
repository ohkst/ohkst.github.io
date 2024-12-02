import React from "react";
import { useNavigate } from "react-router-dom";

import {
  EventListItemType
} from "../API/EventModel";

const imageBase = "https://file.truefriend.com/Storage/mobile/event/eventQ";

function EventCard(props: EventListItemType) {
  const { num, title, createdate } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${num}`, { state: { title : title, dateRange : createdate } });
    console.log(num);
  };

  return (
    <div className="event-card" onClick={handleClick}>
      <img className="event-card-image" src={`${imageBase}${1 + 70}_banner.png`} alt="" />
    </div>
  );
}

export default EventCard;