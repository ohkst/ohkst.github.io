import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import Filters from '../components/Filters';
import OngoingEvents from './OngoingEvents';
import Benefits from './Benefits';
import Banner from "../components/Banner";

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
    { id: 'ongoing', title: '진행중 이벤트' },
    { id: 'benefits', title: '혜택' },
  ];

  const [activeTab, setActiveTab] = useState<string>('ongoing');

  const tabsProps: MyTabsProps = {
    tabs,
    activeTab,
    setActiveTab,
  };

  const FILTER_CATEGORYS = [
    {
      sort_type: "type",
      name: "유형",
      value: ["전체", "국내", "해외", "금융상품", "기타"],
      default_value : "전체"
    },

    {
      sort_type: "available",
      name: "참여가능",
      value: ["참여가능", "전체",],
      default_value : "참여가능"
    },
  ];

  return (
    <div>
      <Tabs {...tabsProps} />
      {activeTab !== 'benefits' && <Filters filterCategorys={FILTER_CATEGORYS}/>}
      {activeTab === 'ongoing' && <OngoingEvents filterType='전체' filterAvailable='참여가능'/>}
      {activeTab === 'benefits' && <Benefits />}
      {activeTab === 'ongoing' && <Banner bannerName='eventBanner' pagination={0} destination={"4706"}/>}
    </div>
  );
}

export default Events;