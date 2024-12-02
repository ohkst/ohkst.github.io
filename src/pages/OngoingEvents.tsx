import React, { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";
import Banner from "../components/Banner";
import {
  AccountListModel,
  EventListModel,
  AppNoticeListModel,
  AutoTradingModel,
  BankisStockModel,
  BankisDollarModel,
  OverseasStockModel,
  EventListItemType
} from "../API/EventModel";

// interface EventInfo {
//   id: number;
//   imagePath: string;
//   title: string | null;
//   dateRange: string | null;
//   ongoing: string | null;
// }

interface OngoingEventsProps {
  filterType: string;
  filterAvailable: string;
}

function OngoingEvents({ filterType, filterAvailable }: OngoingEventsProps) {
  // const navigate = useNavigate();
  const [selectedCategory] = useState("all");

  const [eventList, setEventList] = useState<EventListItemType[]>([]);

  const isBannerVisibleRef = useRef(false);
  // const [events] = useState<EventInfo[]>(combinedEvents);

  const filteredList =
    selectedCategory === "all"
      ? eventList
      : eventList.filter((event) => event.na_event_type !== selectedCategory);

  useEffect(() => {
    if (window.Android) {
      // Android 네이티브 함수 호출
      console.warn("Android");
      window.Android.getMobileNoticePopup("");
    } else if (window.webkit && window.webkit.messageHandlers) {
      // iOS 네이티브 함수 호출
      console.warn("iOS");
  
      if (window.webkit.messageHandlers.getMobileNoticePopup) {
        window.webkit.messageHandlers.getMobileNoticePopup.postMessage("");
      }
    } else {
      console.warn("Mobile 환경이 아님");
    }

  }, []);  

  useEffect(() => {
    const handleSroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      isBannerVisibleRef.current = clientHeight >= scrollHeight - scrollTop;
    };
    window.addEventListener("scroll", handleSroll);
    return () => window.removeEventListener("scroll", handleSroll);
  }, []);

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

    // 네이티브에서 React로 데이터를 전달받는 함수
    window.onNativeMessage = (message: string) => {
      console.log("네이티브에서 전달받은 메시지:", message);

      try {
        // 간단히 key 값만 파싱
        const { key } = JSON.parse(message);
        if (key !== "event/mobile_notice_popup") {
          return;
        }
        const model = modelMapping[key as ModelKey];

        if (!model) {
          console.error("지원되지 않는 키:", key);
          return;
        }

        // 필요한 경우 전체 데이터 파싱
        const parsedData = EventListModel.parse(JSON.parse(message));
        const parsedEventList = parsedData.content
        setEventList(parsedEventList)

        console.log("파싱된 JSON 객체:", parsedData);
        console.log("eventList:", parsedEventList);
        console.log("key:", parsedData.key);
      } catch (error) {
        console.error("JSON 파싱 오류:", error);
      }
    };
  }, []);

  return (
    <div className="events">
      {filteredList.map((event, index) => {
        const props: EventListItemType = {
          ...event,
        };
        return <EventCard key={index} {...props} />;
      })}
      {isBannerVisibleRef.current && (
        <Banner
          bannerName={"eventBanner"}
          pagination={0}
          destination={
            "https://m.koreainvestment.com/app/mtsrenewal.jsp?type=06&SSO_SCREENNO=4706"
          }
        />
      )}
    </div>
  );
}

export default OngoingEvents;

