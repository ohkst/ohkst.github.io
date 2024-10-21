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
                    <span 
                        className={activeTab === 'ongoing' ? 'active' : 'deactive'} 
                        onClick={() => setActiveTab('ongoing')}
                    >
                        진행중 이벤트
                    </span>
                </div>
                <div className="tab">
                    <span 
                        className={activeTab === 'benefits' ? 'active' : 'deactive'} 
                        onClick={() => setActiveTab('benefits')}
                    >
                        혜택
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Tabs;