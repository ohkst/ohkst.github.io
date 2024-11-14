import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Benefit.css';

function Benefits() {
    const navigate = useNavigate();
    const handleClick = (id: string) =>{
        navigate('/event/'+id);
    };

    return (
        <div className="benefits">
            <div id = "benefitBg">
                <div className = "btnGroup">
                    <button className="btn1" type="button" onClick={() => handleClick("2")}>대상 여부 조회</button>
                    <button className="btn2" type="button" onClick={() => window.open("https://m.koreainvestment.com/app/mtsrenewal.jsp?type=06&SSO_SCREENNO=3911")}>해외거래서비스 신청하기</button>
                    <button className="btn3" type="button" onClick={() => handleClick("3")}>이벤트 신청하기</button>
                    <button className="btn4" type="button" onClick={() => handleClick("3")}>주식 추첨하기</button>
                    <button className="btn5" type="button">미참가중</button>
                    {/* TODO api로 참가여부 받아와서 변경해줘야 함 */}
                </div>
                {/* 혜택 관련 콘텐츠 추가 */}
            </div>
        </div>
    );
}

export default Benefits;