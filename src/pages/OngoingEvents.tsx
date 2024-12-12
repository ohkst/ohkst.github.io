import React, { useEffect, useState, useRef } from "react";
import EventCard, { EventCardProps } from "../components/EventCard";
import Banner from "../components/Banner";
import {
  EventListItemType,
  AccountListModel,
  EventListModel,
  AppNoticeListModel,
  AutoTradingModel,
  BankisStockModel,
  BankisDollarModel,
  OverseasStockModel,
} from "../API/EventModel";

interface OngoingEventsProps {
  filterType: string;
  filterAvailable: string;
}

function OngoingEvents({ filterType, filterAvailable }: OngoingEventsProps) {
  const [selectedCategory] = useState("all");

  const [eventList, setEventList] = useState<EventListItemType[]>([]);

  const isBannerVisibleRef = useRef(false);

  const filteredList: EventListItemType[] =
    selectedCategory === "all"
      ? eventList
      : eventList.filter(
          (event: EventListItemType) => event.na_event_type !== selectedCategory
        );

  useEffect(() => {
    const eventListFilterParam = JSON.stringify({
      able: "",
      eventTypeIndex: "1",
      eventAbleIndex: "1"
    });

    if (window.Android) {
      // Android 네이티브 함수 호출
      window.Android.getMobileNoticePopup(eventListFilterParam);
    } else if (window.webkit && window.webkit.messageHandlers) {
      // iOS 네이티브 함수 호출
      if (window.webkit.messageHandlers.getSchemeOpenData) {
        window.webkit.messageHandlers.getSchemeOpenData.postMessage("");
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
        const parsedEventList: EventListItemType[] = parsedData.content;
        setEventList(parsedEventList);
        console.log("파싱된 JSON 객체:", parsedData);
        console.log("eventList:", parsedEventList);
        console.log("key:", parsedData.key);
      } catch (error) {
        console.error("JSON 파싱 오류:", error);
      }
    };

    // 네이티브에서 React로 데이터를 전달받는 함수
    window.onAppToEventScheme = (message: string) => {
      console.log("네이티브에서 전달받은 메시지:", message);
      
      const eventListFilterParam = JSON.stringify({
        able: "",
        eventTypeIndex: "2",
        eventAbleIndex: "1"
      });
  
      if (window.Android) {
        // Android 네이티브 함수 호출
        window.Android.getMobileNoticePopup(eventListFilterParam);
      } else if (window.webkit && window.webkit.messageHandlers) {
        // iOS 네이티브 함수 호출
        if (window.webkit.messageHandlers.getMobileNoticePopup) {
          window.webkit.messageHandlers.getMobileNoticePopup.postMessage(eventListFilterParam);
        }
      } else {
        console.warn("Mobile 환경이 아님");
      }
    };
    
  }, []);

  return (
    <div className="events">
      {filteredList.map((event: EventListItemType, index) => {
        const props: EventCardProps = {
          index: index,
          num: event.num,
          imagePath: "",
          title: event.title,
          createdate: event.createdate,
          todate: event.todate,
          fromdate: event.fromdate,
          na_view_type: event.na_view_type,
          na_event_summary: event.na_event_summary,
          na_event_terms: event.na_event_terms,
          na_event_code: event.na_event_code,
        };
        return <EventCard key={index} {...props} />;
      })}
      {isBannerVisibleRef.current && (
        <Banner
          bannerName={"eventBanner"}
          pagination={0}
          destination={"4706"}
          openData={"COUPON_OPEN"}
        />
      )}
    </div>
  );
}

export default OngoingEvents;
