import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/EventDetail.css';
import Tabs from '../components/Tabs';
import EventContent from './EventContent';
import EventRegister from './EventRegister';

const eventDetails = {
    1: { title: "Bankis 해외주식 신규 $30 이벤트", dateRange: "2024.09.27 ~ 2024.12.31", imgName : "img_bankis_ff_30dollar_2410" },
    2: { title: "해외주식 거래", dateRange: "2024.10.07 ~ 2024.11.15", imgName : "23161753img_fs_exchange_plus_event_2408" },
    3: { title: "BanKIS 계좌개설 이벤트", dateRange: "2024.10.01 ~ 2024.12.31", imgName : "img_bankis_direct_event_2212" }
};

function EventDetail() {    
    const { id } = useParams();
    const event = eventDetails[id];
    const imageUrl = "https://file.truefriend.com/updata/namo/"+eventDetails[id].imgName+".png"
    const tabs = [
        { id: 'contents', title: '이벤트 내용보기' },
        { id: 'register', title: '이벤트 참여하기' },
    ];
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
                    <div>
                        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                        {activeTab === 'contents' && <EventContent />}
                        {activeTab === 'register' && <EventRegister/>}
                    </div>
                    <div id ="registerTab">{activeTab === 'register' && <EventRegister />}</div>
                </div>
            </div>
        </div>
    );
}

export default EventDetail;