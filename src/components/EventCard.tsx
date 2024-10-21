import React from "react";
import { Link } from "react-router-dom";

export interface EventCardProps {
  id: number;
  title?: string;
  description?: string;
  dateRange?: string;
  imagePath: string;
}

function EventCard(props: EventCardProps) {
  return (
    <div className="event-card">
      <Link to={`/event/${props.id}`}>
        <img className="event-card-image" src={props.imagePath} alt="" />
      </Link>
    </div>
  );
}

export default EventCard;
