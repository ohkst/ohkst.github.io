import React from 'react';
import EventCard from '../components/EventCard';

const ongoingEventList = [
    { id: 1, title: "$30 신청 혜택", description: "신청하면 즉시 $30 지급", dateRange: "2024.09.27 ~ 2024.12.31" },
    { id: 2, title: "해외주식 거래", description: "매주 선물 받기!", dateRange: "2024.10.07 ~ 2024.11.15" },
    { id: 3, title: "BanKIS 계좌개설 이벤트", description: "모두 다! 드려요!", dateRange: "2024.10.01 ~ 2024.12.31" }
];

function OngoingEvents() {
    return (
        <div className="events">
            {ongoingEventList.map(event => (
                <EventCard 
                    key={event.id} 
                    id={event.id} 
                    title={event.title} 
                    description={event.description} 
                    dateRange={event.dateRange} 
                />
            ))}
        </div>
    );
}

export default OngoingEvents;