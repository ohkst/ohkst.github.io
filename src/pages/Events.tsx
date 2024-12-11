import React, { useState, useEffect, useCallback } from "react";
import Tabs from "../components/Tabs";
import Filters from "../components/Filters";
import OngoingEvents from "./OngoingEvents";
import Benefits from "./Benefits";
import Banner from "../components/Banner";

// 이벤트 리스트 필터 구조 정보
export interface EventListFilterInfo {
  sortType: string;
  defaultDisplayName: string;
  defaultName: string;
  selectedName: string;
  value: Record<string, string>;
  // value: { key: string, value: string}[];
}

interface Tab {
  id: string;
  title: string;
}

interface MyTabsProps extends React.JSX.IntrinsicAttributes {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

function Events() {
  const tabs = [
    { id: "ongoing", title: "진행중 이벤트" },
    { id: "benefits", title: "혜택" },
  ];

  const [activeTab, setActiveTab] = useState<string>("ongoing");
  const [filterInfoList, setFilterInfoList] = useState<EventListFilterInfo[]>([]);

  const tabsProps: MyTabsProps = {
    tabs,
    activeTab,
    setActiveTab,
  };

  const FILTER_CATEGORYS: EventListFilterInfo[] = [
    {
      sortType: "type",
      defaultDisplayName: "유형",
      defaultName: "전체",
      selectedName: "",
      value: {"전체": "1", "국내": "2", "해외": "3", "금융상품": "4", "기타": "5"}
    },

    {
      sortType: "available",
      defaultDisplayName: "참여가능",
      defaultName: "참여가능",
      selectedName: "",
      value: {"참여가능": "1", "전체": "1"}, // 현재 참여가능과 전체 동일한 호출
    },
  ];

  const handleFilterChange = useCallback((filters: EventListFilterInfo[]) => {
    setFilterInfoList(filters);
  }, []);

  const getFilterInfo = useCallback( (sortType: string): EventListFilterInfo | undefined => {
    return filterInfoList.find((filter) => filter.sortType === sortType);
  }, [filterInfoList]);

  // 필터 값이 변경될 때 OngoingEvents를 업데이트
  useEffect(() => {
    console.log(filterInfoList);
    
    if (!filterInfoList || filterInfoList.length === 0) return ;

    const ableFilter = getFilterInfo("available");
    const ableSelectedKey = ableFilter?.selectedName ?? "참여가능";

    const typeFilter = getFilterInfo("type");
    const typeSelectedKey = typeFilter?.selectedName ?? "전체";
    
    const eventListFilterParam = JSON.stringify({
      able: ableSelectedKey === "전체" ? "1" : "",
      eventTypeIndex: typeFilter?.value[typeSelectedKey] ?? "1",
      eventAbleIndex: ableFilter?.value[ableSelectedKey] ?? "1"
    });

    console.log(eventListFilterParam);

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

  }, [filterInfoList, getFilterInfo]);

  return (
    <div>
      <Tabs {...tabsProps} />
      {activeTab !== "benefits" && (
        <Filters
          filterCategorys={FILTER_CATEGORYS}
          onFilterChange={handleFilterChange}
        />
      )}
      {activeTab === "ongoing" && (
        <OngoingEvents filterType="전체" filterAvailable="참여가능" />
      )}
      {activeTab === "benefits" && <Benefits />}
      {activeTab === "ongoing" && (
        <Banner
          bannerName="eventBanner"
          pagination={0}
          destination={"4706"}
          openData={"COUPON_OPEN"}
        />
      )}
    </div>
  );
}

export default Events;
