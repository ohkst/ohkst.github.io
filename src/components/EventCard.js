import React from "react";
import { Link } from "react-router-dom";

function EventCard({ id, title, description, dateRange, imagePath }) {
  return (
    <div className="event-card">
      <Link to={`/event/${id}`}>
        <img className="event-card-image" src={imagePath} alt="" />
      </Link>
    </div>
  );
}

export default EventCard;
