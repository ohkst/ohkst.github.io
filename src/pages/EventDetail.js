import React from 'react';
import { useParams } from 'react-router-dom';

const eventDetails = {
    1: { title: "$30 신청 혜택", description: "신청하면 즉시 $30 지급되는 이벤트입니다.", dateRange: "2024.09.27 ~ 2024.12.31" },
    2: { title: "해외주식 거래", description: "매주 해외주식 거래를 통해 선물을 받을 수 있습니다.", dateRange: "2024.10.07 ~ 2024.11.15" },
    3: { title: "공모주 골든위크", description: "10월 골든위크 기간 중 공모주 청약을 확인하세요.", dateRange: "2024.10.01 ~ 2024.10.31" }
};

function EventDetail() {
    const { id } = useParams();
    const event = eventDetails[id];

    if (!event) {
        return <p>해당 이벤트를 찾을 수 없습니다.</p>;
    }

    return (
        <div className="event-detail">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.dateRange}</p>
        </div>
    );
}

export default EventDetail;