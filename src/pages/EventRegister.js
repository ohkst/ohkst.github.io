import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Checkbox from '../components/Checkbox'

const eventDetails = {
    1: { title: "Bankis 해외주식 신규 $30 이벤트",imgName : "img_bankis_ff_30dollar_2410" },
    2: { title: "해외주식 거래", imgName : "23161753img_fs_exchange_plus_event_2408" },
    3: { title: "BanKIS 계좌개설 이벤트", imgName : "img_bankis_direct_event_2212" }
};

function EventRegister() {
    const { id } = useParams();
    const event = eventDetails[id];
    const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
        <div>
            <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
                운영규정 및 개인정보 수집 안내
            </Checkbox>
        </div>
        <div>
            <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
                개인정보 수집・이용・제공에 동의합니다.
            </Checkbox>
        </div>
        <div>
            <button>
                대상여부 조회하기
            </button>
        </div>
        <div>
            <button>
                이벤트 신청하기
            </button>
        </div>
    </div>
  );
}

export default EventRegister;