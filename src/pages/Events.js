import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import Filters from '../components/Filters';
import OngoingEvents from './OngoingEvents';
import Benefits from './Benefits';

function Events() {
    // Tabs 컴포넌트에 전달할 데이터
    const tabs = [
        { id: 'ongoing', title: '진행중 이벤트' },
        { id: 'benefits', title: '혜택' },
    ];

    const [activeTab, setActiveTab] = useState('ongoing');

    return (
        <div>
            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab !== 'benefits' && <Filters />}
            {activeTab === 'ongoing' && <OngoingEvents />}
            {activeTab === 'benefits' && <Benefits />}
        </div>
    );
}

export default Events;