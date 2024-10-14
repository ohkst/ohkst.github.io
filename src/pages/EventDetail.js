import {React} from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/EventDetail.css';

const eventDetails = {
    1: { title: "$30 신청 혜택", dateRange: "2024.09.27 ~ 2024.12.31", imgName : "img_bankis_ff_30dollar_2410" },
    2: { title: "해외주식 거래", dateRange: "2024.10.07 ~ 2024.11.15", imgName : "23161753img_fs_exchange_plus_event_2408" },
    3: { title: "BanKIS 계좌개설 이벤트", dateRange: "2024.10.01 ~ 2024.12.31", imgName : "img_bankis_direct_event_2212" }
};

function EventDetail() {
    const { id } = useParams();
    const event = eventDetails[id];
    const imageUrl = "https://file.truefriend.com/updata/namo/"+eventDetails[id].imgName+".png"

    if (!event) {
        return <p>해당 이벤트를 찾을 수 없습니다.</p>;
    }

    return (
        <div className="event-detail">
            <h2>{event.title}</h2>
            <p>{event.dateRange}</p>
            <div>
                <img id = "detailImage" src={imageUrl}/>
            </div>
        </div>
    );
}

export default EventDetail;