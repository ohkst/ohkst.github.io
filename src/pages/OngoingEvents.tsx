import React, { useEffect, useState } from "react";
import EventCard, { EventCardProps } from "../components/EventCard";

import { getData, postData } from "../API/api";
import { TestPostRequestData } from "../API/EventModel";

const APIEndPoint = {
  GetTest: "posts",
  PostTest: "posts",
};
Object.freeze(APIEndPoint);

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

function OngoingEvents() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImageSources = async () => {
      try {
        const response = await fetch("https://securities.koreainvestment.com/main/customer/notice/Event.jsp?gubun=i", {
          method: "GET",
          mode: "cors"
        });
        const text = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const images = doc.querySelectorAll<HTMLImageElement>(".event_img img");
        const imageSources = Array.from(images).map((img) => img.src);

        setImages(imageSources);
        console.log(imageSources);
      } catch (error) {
        console.error("이미지 경로를 가져오는 데 실패했습니다:", error);
      }
    };

    fetchImageSources();
    fetchData();
    postMessageData();
  }, []);

  return (
    <div className="events">
      {images.map((event, index) => {
        const props: EventCardProps = { id: index, imagePath: event };
        return <EventCard key={index} {...props} />
      })}
    </div>
  );
}
export default OngoingEvents;
