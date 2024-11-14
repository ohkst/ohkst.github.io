import React from "react";

import { useParams } from 'react-router-dom';
import '../styles/EventContent.css';

const eventDetails: Record<number, {title: string, imgName: string}> = {
    0: { title: "Bankis 해외주식 신규 $30 이벤트",imgName : "img_bankis_ff_30dollar_2410" },
    1: { title: "Bankis 해외주식 신규 $30 이벤트",imgName : "img_bankis_ff_30dollar_2410" },
    2: { title: "해외주식 거래", imgName : "23161753img_fs_exchange_plus_event_2408" },
    3: { title: "BanKIS 계좌개설 이벤트", imgName : "img_bankis_direct_event_2212" }
};

function EventContent() {
    const { id } = useParams();
    const index = parseInt(id || '0', 10);
    const event = eventDetails[index];
    const imageUrl = "https://file.truefriend.com/updata/namo/"+event.imgName+".png"

    return (
        <div>
            <img id = "detailImage" src={imageUrl} alt=""/>
        </div>
    );
}

export default EventContent;