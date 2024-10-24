import React from 'react';

  interface Tab {
    id: string;
    title: string;
  }
  
  interface TabsProps {
    tabs: Tab[]; // Added tabs prop
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  }
  
  function Tabs({ activeTab, setActiveTab, tabs }: TabsProps) {
    return (
      <div className="tabHeader">
        <div className="wrap">
          <div className="tab">
            {tabs.map((tab, index) => (
              <span
                key={index}
                className={activeTab === tab.id ? 'active' : 'deactive'} // Concise conditional rendering
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