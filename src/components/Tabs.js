import React from 'react';

function Tabs({ activeTab, setActiveTab }) {
    return (
        <div className="tabs">
            <button 
                className={activeTab === 'ongoing' ? 'active' : ''} 
                onClick={() => setActiveTab('ongoing')}
            >
                진행중 이벤트
            </button>
            <button 
                className={activeTab === 'benefits' ? 'active' : ''} 
                onClick={() => setActiveTab('benefits')}
            >
                혜택
            </button>
        </div>
    );
}

export default Tabs;