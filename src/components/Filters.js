import React, { useState } from "react";

import downArrow from "../images/ic_arrow_down_20.png";

function Filters({ activeTab, setActiveTab }) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);

  const filterTypes = [
    "전체",
    "국내",
    "해외",
    "금융상품",
    "기타",
  ];

  const filterAvalable = [
    "참여가능",
    "전체",
  ];

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
    setOverlayVisible(!overlayVisible);
  };

  const handleOverlayClick = () => {
    setOverlayVisible(false);
  };

  return (
    <div class="filterWrap">
      <span className="filterTab" onClick={() => handleFilterClick('type')}>
        유형
        <img id="filterArrowDown" alt="" src={downArrow} />
      </span>
      <span className="filterTab" onClick={() => handleFilterClick('available')}>
        참여가능
        <img id="filterArrowDown" alt="" src={downArrow} />
      </span>

      {overlayVisible && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="overlayContent" onClick={(e) => e.stopPropagation()}>
            { (activeFilter === 'type' ? filterTypes : filterAvalable).map((option, index) => (
                <div key={index} className="filterItem">{option}</div>
                // {/* 원하는 필터 옵션들을 추가하세요 */}
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Filters;
