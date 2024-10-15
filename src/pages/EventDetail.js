<<<<<<< HEAD
import {React} from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/EventDetail.css';

const eventDetails = {
    1: { title: "$30 신청 혜택", dateRange: "2024.09.27 ~ 2024.12.31", imgName : "img_bankis_ff_30dollar_2410" },
=======

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/EventDetail.css';
import EventContent from './EventContent';
import EventRegister from './EventRegister';

const eventDetails = {
    1: { title: "Bankis 해외주식 신규 $30 이벤트", dateRange: "2024.09.27 ~ 2024.12.31", imgName : "img_bankis_ff_30dollar_2410" },
>>>>>>> 2ce396a511158259f8457f94dde75272282b8883
    2: { title: "해외주식 거래", dateRange: "2024.10.07 ~ 2024.11.15", imgName : "23161753img_fs_exchange_plus_event_2408" },
    3: { title: "BanKIS 계좌개설 이벤트", dateRange: "2024.10.01 ~ 2024.12.31", imgName : "img_bankis_direct_event_2212" }
};

function EventDetail() {
    const { id } = useParams();
    const event = eventDetails[id];
    const imageUrl = "https://file.truefriend.com/updata/namo/"+eventDetails[id].imgName+".png"

    const [activeTab, setActiveTab] = useState('contents');
    if (!event) {
        return <p>해당 이벤트를 찾을 수 없습니다.</p>;
    }

    return (
        <div className="event-detail">
<<<<<<< HEAD
            <h2>{event.title}</h2>
            <p>{event.dateRange}</p>
            <div>
                <img id = "detailImage" src={imageUrl}/>
            </div>
=======
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

>>>>>>> 2ce396a511158259f8457f94dde75272282b8883
        </div>
    );
}

export default EventDetail;