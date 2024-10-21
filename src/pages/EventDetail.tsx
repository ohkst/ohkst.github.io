import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/EventDetail.css';
import EventContent from './EventContent';
import EventRegister from './EventRegister';

const eventDetails: Record<number, {title: string, dateRange: string}> = {
    0: { title: "00해외주식 거래", dateRange: "2024.10.07 ~ 2024.11.15"},
    1: { title: "Bankis 해외주식 신규 $30 이벤트", dateRange: "2024.09.27 ~ 2024.12.31"},
    2: { title: "해외주식 거래", dateRange: "2024.10.07 ~ 2024.11.15"},
    3: { title: "BanKIS 계좌개설 이벤트", dateRange: "2024.10.01 ~ 2024.12.31"}
};

function EventDetail() {
    const { id } = useParams();
    const index = parseInt(id || '0', 10);
    const event = eventDetails[index];

    const [activeTab, setActiveTab] = useState('contents');
    if (!event) {
        return <p>해당 이벤트를 찾을 수 없습니다.</p>;
    }

    return (
        <div className="event-detail">
            <h2 id = "eventTitle">{event.title}</h2>
            <p id = "dateRange">{event.dateRange}</p>

            <div className="tabHeader">
                <div className="wrap">
                    <div className="tab">
                        <span 
                            className={activeTab === 'contents' ? 'active' : 'deactive'} 
                            onClick={() => setActiveTab('contents')}
                        >
                            이벤트 내용보기
                        </span> 
                    </div>
                    <div id ="contentsTab">{activeTab === 'contents' && <EventContent />}</div>
                    
                    <div className="tab">
                        <span 
                            className={activeTab === 'register' ? 'active' : 'deactive'} 
                            onClick={() => setActiveTab('register')}
                        >
                            이벤트 참여하기
                        </span>
                    </div>
                    <div id ="registerTab">{activeTab === 'register' && <EventRegister />}</div>
                </div>
            </div>
        </div>
    );
}

export default EventDetail;