import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

import { getData, postData, putData, deleteData } from '../API/api';
import { TestPostRequestData } from '../API/EventModel'

const APIEndPoint = {
    GetTest: 'posts',
    PostTest: 'posts'
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
        const requestParam: TestPostRequestData = { key: "safdasdf", title: "asdfasdfasdf", value: "asdfasdfsdf" };
        const data = await postData(APIEndPoint.PostTest, requestParam);
        console.log(data);
    } catch (error) {
        console.error("데이터 가져오기 실패", error);
    }
}

function OngoingEvents() {
  const [images, setImages] = useState([]);

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
        const images = doc.querySelectorAll(".event_img img");
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
      {images.map((event, index) => (
        <EventCard key={index} id={index} imagePath={event} />
      ))}
    </div>
  );
}

export default OngoingEvents;
