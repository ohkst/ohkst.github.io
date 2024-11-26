import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import EventCard, { EventCardProps } from "../components/EventCard";
import Banner from "../components/Banner";
import { getData, postData } from "../API/api";
import { TestPostRequestData } from "../API/EventModel";

const APIEndPoint = {
  GetTest: "posts",
  PostTest: "posts",
};
Object.freeze(APIEndPoint);

interface EventInfo {
  id: number;
  imagePath: string;
  title: string|null;
  dateRange: string|null;
  ongoing : string|null;
}

interface OngoingEventsProps {
  filterType: string;
  filterAvailable: string;
}

async function fetchData() {
  try {
    const data = await getData(APIEndPoint.GetTest);
    console.log(data);
  } catch (error) {
    console.error("데이터 가져오기 실패", error);
  }
}

async function postMessageData() {
  try {
    const requestParam: TestPostRequestData = { key: 1, title: "2", value: 3 };
    const data = await postData(APIEndPoint.PostTest, requestParam);
    console.log(data);
  } catch (error) {
    console.error("데이터 가져오기 실패", error);
  }
}

function OngoingEvents({filterType, filterAvailable}:OngoingEventsProps) {
  const [events, setEvents] = useState<EventInfo[]>([]);
  const navigate = useNavigate();
  const [selectedCategory, ] = useState("all");
  const filteredList = selectedCategory === "all"? events : events.filter((events)=>events.ongoing===selectedCategory);
  const isBannerVisibleRef = useRef(false);
  useEffect(() => {
    const fetchImageSources = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/proxy?url=${encodeURIComponent(
            "https://securities.koreainvestment.com/main/customer/notice/Event.jsp?gubun=i"
          )}`
        );
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");

        const images = doc.querySelectorAll<HTMLImageElement>(".event_img img");
        const imageSources = Array.from(images).map((img) => "https://file.truefriend.com/Storage/mobile/event/eventQ99_banner.png");
        const titleElements = doc.querySelectorAll<HTMLElement>(".ofh .title");
        const titleSources = Array.from(titleElements).map((title) => title?.textContent).filter(t => t !== null);

        const dateElements = doc.querySelectorAll<HTMLSpanElement>(".letter_0");
        const dateSources = Array.from(dateElements).map((dateElements) => dateElements?.textContent).filter(t => t !== null);

        const ongoingElements = doc.querySelectorAll<HTMLSpanElement>(".event_ing");
        const ongoingSources = Array.from(ongoingElements).map((ongoingElements) => ongoingElements?.textContent).filter(t => t !== null);

        const combinedEvents = imageSources.map((image, index) => ({
          id: index,
          imagePath: image,
          title: titleSources[index],
          dateRange: dateSources[index],
          ongoing: ongoingSources[index],//진행중
        }));

        setEvents(combinedEvents);
        console.log(combinedEvents);
      } catch (error) {
        console.error("이미지 경로를 가져오는 데 실패했습니다:", error);
      }
    };

    fetchImageSources();
    fetchData();
    postMessageData();
  }, []);

  useEffect(()=>{
    const handleSroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    isBannerVisibleRef.current = clientHeight >= scrollHeight -scrollTop;
    };
    window.addEventListener('scroll', handleSroll);
    return () => window.removeEventListener('scroll', handleSroll);
  }, []);

  const handleEventClick = (index: number) => {
    const selectedEvent = filteredList[index];
    navigate(`/event/${selectedEvent.id}`, { state: { title: selectedEvent.title } });
  };

  return (
    <div className="events">
      {filteredList.map((event, index) => {
        const props: EventCardProps = {
          ...event,
          onClick: () => handleEventClick(index),
        };
        return <EventCard key={index} {...props}/>;
      })}
      {
      (isBannerVisibleRef.current&&
         <Banner bannerName={'eventBanner'} pagination={0} destination={"https://m.koreainvestment.com/app/mtsrenewal.jsp?type=06&SSO_SCREENNO=4706"}/>
      )}
    </div>
  );
}

export default OngoingEvents;