import React from 'react';

function Tabs({ activeTab, setActiveTab }) {
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