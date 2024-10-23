import React from 'react';

interface TabsProps {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  }

function Tabs({ activeTab, setActiveTab }: TabsProps) {
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