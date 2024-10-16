import React from 'react';

function Tabs({ tabs, activeTab, setActiveTab }) {
    return (
      <div className="tabHeader">
        <div className="wrap">
          <div className="tab">
            {tabs.map((tab, index) => (
              <span
                key={index}
                className={activeTab === tab.id ? 'active' : 'deactive'}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
}
  
export default Tabs;