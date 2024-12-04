import React from "react";
import { format, parse } from "date-fns";
import { ko } from "date-fns/locale";
// import { useNavigate } from "react-router-dom";

export interface EventCardProps {
  index: number;
  num: string;
  imagePath: string;
  title: string | null;
  createdate: string | null;
  todate: string | null;
  fromdate: string | null;
  na_view_type: string | null;
  na_event_summary: string | null;
  na_event_terms: string | null;
  na_event_code: string | null;
}

const imageBase = "https://file.truefriend.com/Storage/mobile/event/eventQ";

function EventCard(props: EventCardProps) {
  const { index, num, title, todate, fromdate, na_view_type, na_event_summary, na_event_terms, na_event_code } = props;
  // const navigate = useNavigate();

  const formatDateFromYYYYMMDD = (dateString: string, formater: string) => {
    // `yyyyMMdd` 형식의 문자열을 Date 객체로 파싱
    const date = parse(dateString, "yyyyMMdd", new Date());

    // Date 객체를 원하는 포맷으로 변환
    return format(date, formater, { locale: ko });
  };

  const formatter = "yyyy.MM.dd";
  const fromDateString = formatDateFromYYYYMMDD(fromdate ?? "", formatter);
  const toDateString = formatDateFromYYYYMMDD(todate ?? "", formatter);

  // "2024.11.27 ~ 2025.01.15"
  const handleClick = () => {
    // navigate(`/event/${num}`, { state: { title : title, dateRange : createdate } });
    // console.log(num);

    const getOpenData = () => {
      const dateString = `${fromDateString} ~ ${toDateString}`
      if (na_view_type === "01") {
        return `${num}◆${title}◆${dateString}◆${na_view_type}◆◆`;
      } else if (na_view_type === "02") {
        return `${num}◆${title}◆${dateString}◆${na_view_type}◆${na_event_summary}◆${na_event_terms}`;
      } else if (na_view_type === "03") {
        return `${na_event_code}◆${title}◆${dateString}◆${na_view_type}◆${na_event_summary}◆${na_event_terms}◆${num}`;
      } else {
        return "";
      }
    };
    const openData = getOpenData()

    if (window.Android) {
      // Android 네이티브 함수 호출
      console.warn("Android");
      window.Android.moveEventDetail(openData);
    } else if (window.webkit && window.webkit.messageHandlers) {
      // iOS 네이티브 함수 호출
      console.warn("iOS");

      if (window.webkit.messageHandlers.moveEventDetail) {
        window.webkit.messageHandlers.moveEventDetail.postMessage(openData);
      }
    } else {
      console.warn("Mobile 환경이 아님");
    }
  };

  return (
    <div className="event-card" onClick={handleClick}>
      <img
        className="event-card-image"
        src={`${imageBase}${index + 70}_banner.png`}
        alt=""
      />
    </div>
  );
}

export default EventCard;
