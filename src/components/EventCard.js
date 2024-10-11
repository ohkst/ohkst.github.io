import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ id, title, description, dateRange }) {
    return (
        <div className="event-card">
            <Link to={`/event/${id}`}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{dateRange}</p>
            </Link>
        </div>
    );
}

export default EventCard;