import React, {useEffect} from 'react';
import '../styles/Benefit.css';
import {
  AccountListModel,
  EventListModel,
  AppNoticeListModel,
  AutoTradingModel,
  BankisStockModel,
  BankisDollarModel,
  OverseasStockModel,
} from "../API/EventModel";

function Benefits() {

  useEffect(() => {
    const modelMapping = {
      "event/account_alias": AccountListModel,
      "event/app_notice_list": AppNoticeListModel,
      "event/mobile_notice_popup": EventListModel,
      "event/auto_trading_check": AutoTradingModel,
      "event/bankis_stock": BankisStockModel,
      "event/bankis_dollar": BankisDollarModel,
      "event/overseas_stock": OverseasStockModel,
    } as const;
    type ModelKey = keyof typeof modelMapping; // 키 타입 추출

    // 네이티브에서 TR 결과를 전달
    window.onNativeMessage = (message: string) => {
      console.log("네이티브에서 전달받은 메시지:", message);

      try {
        // 간단히 key 값만 파싱
        const { key } = JSON.parse(message);

        const model = modelMapping[key as ModelKey];

        if (!model) {
          console.error("지원되지 않는 키:", key);
          return;
        }

        if (key === "event/mobile_notice_popup") {
          return;
        }else if(key === "event/bankis_stock"){
          const parsedData = BankisStockModel.parse(JSON.parse(message));
          const eventJoinYn = parsedData.content.EVNT_OBJT_CUST_YN;
          const eventObjtYn = parsedData.content.EVNT_OBJT_YN;

          if (eventJoinYn === "Y"){ // 이벤트 참여 여부 Y
            if (eventObjtYn === "Y"){ // 럭키박스 오픈 여부 Y
              if (window.Android) {
                window.Android.moveFormDePopup("rn4707P85◆");
              }
              else if (window.webkit && window.webkit.messageHandlers) {
                  // iOS 네이티브 함수 호출
                  if (window.webkit.messageHandlers.moveFormDePopup) {
                    window.webkit.messageHandlers.moveFormDePopup.postMessage("rn4707P85◆");
                  }
                } else {
                  console.warn("Mobile 환경이 아님");
                }
            }else{  // 럭키박스 오픈 여부 N
              if (window.Android) {
                window.Android.showToast("혜택 신청을 완료하였습니다.");
              }
              else if (window.webkit && window.webkit.messageHandlers) {
                  // iOS 네이티브 함수 호출
                  if (window.webkit.messageHandlers.showToast) {
                    window.webkit.messageHandlers.showToast.postMessage("혜택 신청을 완료하였습니다.");
                  }
                } else {
                  console.warn("Mobile 환경이 아님");
                }
            }

          }else{
            if (window.Android) {
              window.Android.showToast("대단히 죄송합니다. 당사 최초신규고객 이벤트입니다.");
            }
            else if (window.webkit && window.webkit.messageHandlers) {
                // iOS 네이티브 함수 호출
                if (window.webkit.messageHandlers.showToast) {
                  window.webkit.messageHandlers.showToast.postMessage("대단히 죄송합니다. 당사 최초신규고객 이벤트입니다.");
                }
              } else {
                console.warn("Mobile 환경이 아님");
              }
          }
          //parsedData.content.EVNT_OBJT_CUST_YN 함수 만들기
          console.log("파싱된 JSON 객체:", parsedData);
          // console.log("eventList:", parsedEventList);
          console.log("key:", parsedData.key);
        }

//BankisStockModel
        // 필요한 경우 전체 데이터 파싱
        


      } catch (error) {
        console.error("JSON 파싱 오류:", error);
      }
    };
  }, []);

    const handleBannerClick = (destination: string, openData: string) => {
        if (window.Android) {
          window.Android.moveScreen(`${destination}◆${openData}`);
        }
        else if (window.webkit && window.webkit.messageHandlers) {
            // iOS 네이티브 함수 호출
            if (window.webkit.messageHandlers.moveScreen) {
              window.webkit.messageHandlers.moveScreen.postMessage(`${destination}◆${openData}`);
            }
          } else {
            console.warn("Mobile 환경이 아님");
          }
        };

        //주식추첨하기
        const handleStockClick = (message: string) => {
          if (window.Android) {
            window.Android.getBankisStock(message);
          }
          else if (window.webkit && window.webkit.messageHandlers) {
              // iOS 네이티브 함수 호출
              if (window.webkit.messageHandlers.getBankisStock) {
                window.webkit.messageHandlers.getBankisStock.postMessage(message);
              }
            } else {
              console.warn("Mobile 환경이 아님");
            }
          };

        //미국주식 대상조회
        const handleOverseasObjtClick = (message: string) => {
          if (window.Android) {
            window.Android.getOverseasStock(message);
          }
          else if (window.webkit && window.webkit.messageHandlers) {
              // iOS 네이티브 함수 호출
              if (window.webkit.messageHandlers.getOverseasStock) {
                window.webkit.messageHandlers.getOverseasStock.postMessage(message);
              }
            } else {
              console.warn("Mobile 환경이 아님");
            }
          };

    return (
        <div className="benefits">
            <div id = "benefitBg">
                <div className = "btnGroup">
                    <button className="content-btn btn1" type="button" onClick={() => handleOverseasObjtClick("")}>대상 여부 조회</button>
                    <button className="content-btn btn2" type="button" onClick={() => handleBannerClick("3911","")}>해외거래서비스 신청하기</button>
                    <button className="content-btn btn3" type="button" onClick={() => handleBannerClick("4707","openEvent:477")}>이벤트 신청하기</button>
                    <button className="content-btn btn4" type="button" onClick={() => handleStockClick("")}>주식 추첨하기</button>
                    <button className="content-btn btn5" type="button" >미참가중</button>
                </div>
            </div>
        </div>
    );
}

export default Benefits;