import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import Filters from '../components/Filters';
import OngoingEvents from './OngoingEvents';
import Benefits from './Benefits';
// import { useParams } from 'react-router-dom';

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

    // const { id } = useParams();
    // const index = parseInt(id || '0', 10);
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

    return (
        <div>
            <Tabs {...tabsProps} />
            {activeTab !== 'benefits' && <Filters activeTab='' setActiveTab={setActiveTab} />}
            {activeTab === 'ongoing' && <OngoingEvents />}
            {activeTab === 'benefits' && <Benefits />}
        </div>
    );
}

export default Events;