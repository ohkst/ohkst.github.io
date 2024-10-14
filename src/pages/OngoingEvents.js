import React from 'react';
import EventCard from '../components/EventCard';

const ongoingEventList = [
    { id: 1, imagePath:"https://file.truefriend.com/Storage/customer/event/184x114_3369.png"},
    { id: 2, imagePath:"https://file.truefriend.com/Storage/customer/event/184x114_3369.png"},
    { id: 3, imagePath:"https://file.truefriend.com/Storage/customer/event/184x114_3369.png"},
    { id: 4, imagePath:"https://file.truefriend.com/Storage/customer/event/184x114_3369.png"},
    { id: 5, imagePath:"https://file.truefriend.com/Storage/customer/event/184x114_3369.png"},
    { id: 6, imagePath:"https://file.truefriend.com/Storage/customer/event/184x114_3369.png"}
];

function OngoingEvents() {
    return (
        <div className="events">
            {ongoingEventList.map(event => (
                <EventCard className="EventCard"
                    key={event.id} 
                    id={event.id} 
                    imagePath={event.imagePath} 
                />
            ))}
        </div>
    );
}

export default OngoingEvents;