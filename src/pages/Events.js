import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import OngoingEvents from './OngoingEvents';
import Benefits from './Benefits';

function Events() {
    const [activeTab, setActiveTab] = useState('ongoing');

    return (
        <div>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 'ongoing' && <OngoingEvents />}
            {activeTab === 'benefits' && <Benefits />}
        </div>
    );
}

export default Events;