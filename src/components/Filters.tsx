import React, { useState } from "react";
import downArrow from "../images/ic_arrow_down_20.png";
import ButtonGroups from './ButtonGroups';

interface FiltersProps {
  filterCategorys: {
    sort_type: string;
    name: string;
    value: string[];
    default_value : string;
  }[];
}

function Filters({ filterCategorys }: FiltersProps) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [resetCount, setResetCount] = useState(0);
  const [initBtnVisible, setInitBtnVisible] = useState(false);
  const [, setFilterCaptions] = useState<{[key: string]: string;}>({});

  const handleFilterClick = (filterType: string) => {
    setActiveFilter(filterType);
    setOverlayVisible(!overlayVisible);
    document.body.style.overflow = 'hidden';

  };
  
  const updateFilterCaption = (filterType: string, newCaption: string) => {
    const filterElement = document.getElementById(filterType);
    if (filterElement){
      filterElement.innerHTML = (newCaption);
    }
    setFilterCaptions((prevCaptions) => {
      return ({ ...prevCaptions, newCaption });
      
    });
   
    console.log(newCaption);
  };


  const handleFilterItemClick = (filterType: string, filterItemName: string, default_value : string) => {
    setOverlayVisible(false);
    setResetCount(resetCount+1);
    switch (activeFilter) {
      case filterType:
        if (filterItemName !== default_value) {
          setActiveFilter(filterType);
          updateFilterCaption(filterType, filterItemName);
          // setResetCount();
          setInitBtnVisible(true);
          //updateFilterCaption이 적용된 filterBtn 개수만큼
          // console.log(filterItemName+resetCount+1);
          console.log(resetCount);
        }
        else{
          setActiveFilter('');
          filterCategorys.map((category) =>
            updateFilterCaption(category.sort_type, category.name)
          //filter count 하나씩 감소
          );
          setResetCount(resetCount-1);
        }
        break;
      default:
        break;
    }
  };
  const handleOverlayClick = () => {
    setOverlayVisible(false);
    document.body.style.overflow = 'auto';
  };

  const handleInitBtnClick = () => {
    setOverlayVisible(false);
    document.body.style.overflow = 'auto';
    setResetCount(0);
    filterCategorys.map((category) =>
      updateFilterCaption(category.sort_type, category.name)
    
    );
    setInitBtnVisible(false);
  };

  return (
    <div className="filterWrap">
      {initBtnVisible && <span className= "initBtn" onClick={() => handleInitBtnClick()} >초기화
        <span style={{color : resetCount > 0 ? 'orange' : 'black'}}>{resetCount}</span>
        </span>}

      {filterCategorys.map((category, index) => (
        <span
          key={index}
          id = {category.sort_type}
          className={activeFilter === category.sort_type ? "clickedfilterTab" : "filterTab"}
          onClick={() => handleFilterClick(category.sort_type)}>
          {category.name}
          <span><img
            id="filterArrowDown"
            src={downArrow}
            alt="filter"
          /></span>
          
        </span>
        
      ))}
      
      {overlayVisible && activeFilter&&(
        <div className="overlay" onClick={handleOverlayClick}>
          <ButtonGroups
            buttons={
              activeFilter === filterCategorys[0].sort_type
                ? filterCategorys[0].value
                : filterCategorys[1].value
            }
            onButtonClick={(filterItem) =>
              handleFilterItemClick(activeFilter, filterItem, activeFilter === filterCategorys[0].sort_type
                ? filterCategorys[0].default_value
                : filterCategorys[1].default_value )
            }
          />
        </div>
      )}
    </div>
    );
  }

export default Filters;
