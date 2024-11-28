import React, { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import EventCard, { EventCardProps } from "../components/EventCard";
import Banner from "../components/Banner";

const APIEndPoint = {
  GetTest: "posts",
  PostTest: "posts",
};
Object.freeze(APIEndPoint);

interface EventInfo {
  id: number;
  imagePath: string;
  title: string | null;
  dateRange: string | null;
  ongoing: string | null;
}

interface OngoingEventsProps {
  filterType: string;
  filterAvailable: string;
}

function OngoingEvents({ filterType, filterAvailable }: OngoingEventsProps) {
  // const navigate = useNavigate();
  const [selectedCategory] = useState("all");

  const imageBase = "https://file.truefriend.com/Storage/mobile/event/eventQ";
  const combinedEvents = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    imagePath: `${imageBase}${index + 70}_banner.png`,
    title: "$30 신청 혜택",
    dateRange: "2024.09.27 ~ 2024.12.31",
    ongoing: "진행중",
  }));

  const isBannerVisibleRef = useRef(false);
  const [events] = useState<EventInfo[]>(combinedEvents);

  const filteredList =
    selectedCategory === "all"
      ? events
      : events.filter((events) => events.ongoing === selectedCategory);

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
    // 네이티브에서 React로 데이터를 전달받는 함수
    window.onNativeMessage = (message: string) => {
      console.log("네이티브에서 전달받은 메시지:", message);
  
      try {
        // JSON 문자열 파싱
        const parsedMessage = JSON.parse(message);
  
        // 파싱된 객체 확인
        console.log("파싱된 JSON 객체:", parsedMessage);
  
        // 내용 접근 예시
        const content = parsedMessage.content;
        const key = parsedMessage.key;
  
        console.log("content:", content);
        console.log("key:", key);
  
        // content 내부 데이터 접근
        if (content) {
          console.log("EVNT_OBJT_CUST_YN:", content.EVNT_OBJT_CUST_YN);
          console.log("EVNT_OBJT_YN:", content.EVNT_OBJT_YN);
          console.log("TR_BNF_OBJT_YN:", content.TR_BNF_OBJT_YN);
          console.log("TR_BNF_PRDT_CD:", content.TR_BNF_PRDT_CD);
        }
      } catch (error) {
        console.error("JSON 파싱 오류:", error);
      }
    };
  }, []);

  const handleEventClick = (index: number) => {
    const selectedEvent = filteredList[index];
    // navigate(`/event/${selectedEvent.id}`, { state: { title: selectedEvent.title } });

    console.warn(selectedEvent);

    if (window.Android) {
      // Android 네이티브 함수 호출
      console.warn("Android");
      window.Android.back("");
    } else if (window.webkit && window.webkit.messageHandlers) {
      // iOS 네이티브 함수 호출
      console.warn("iOS");

      if (window.webkit.messageHandlers.back) {
        window.webkit.messageHandlers.back.postMessage("back");
      }
    }
  };

  return (
    <div className="events">
      {filteredList.map((event, index) => {
        const props: EventCardProps = {
          ...event,
          onClick: () => handleEventClick(index),
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
