import React, { useState, useEffect } from "react";
import { EventListFilterInfo } from "../pages/Events";
import downArrow from "../images/ic_arrow_down_20.png";
import ButtonGroups from "./ButtonGroups";

interface FiltersProps {
  filterCategorys: EventListFilterInfo[];
  onFilterChange: (filters: EventListFilterInfo[]) => void;
}

function Filters({ filterCategorys, onFilterChange }: FiltersProps) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [currentFilters, setCurrentFilters] = useState<EventListFilterInfo[]>(filterCategorys);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const getSelectedFiltersCount = currentFilters.filter(
    (item) => item.selectedName !== ""
  ).length;

  const toggleOverlay = (filterType: string) => {
    setOverlayVisible((prev) => (filterType === activeFilter ? !prev : true));
    setActiveFilter(filterType);
  };

  const handleOverlayClose = () => {
    setOverlayVisible(false);
    setActiveFilter(null);
  };

  const handleReset = () => {
    // setCurrentFilters 업데이트
    setCurrentFilters((prevFilters) => {
      const updatedFilters = prevFilters.map((filter) => ({ ...filter, selectedName: "" }))
      onFilterChange(updatedFilters);
      return updatedFilters;
    });

    setOverlayVisible(false);
    setActiveFilter(null);
  };

  const handleFilterItemClick = (sortType: string, filterName: string) => {
    console.log(`Selected filter item: ${filterName}`);

    const updateFilter = (filter: any) => {
      if (filter.sortType === sortType) {
        if (filter.defaultName === filterName) {
          return { ...filter, selectedName: "" };
        } else {
          return { ...filter, selectedName: filterName };
        }
      } else {
        return filter;
      }
    };

    setCurrentFilters((prevFilters) => {
      const updatedFilters = prevFilters.map((filter) => updateFilter(filter));
      // 필터 상태 업데이트 후 onFilterChange 호출
      onFilterChange(updatedFilters);
      return updatedFilters;
    });

    handleOverlayClose();
  };

  useEffect(() => {
    if (!overlayVisible) {
      setActiveFilter(null);
    }
  }, [overlayVisible])

  // 네이티브에서 오픈데이터 스킴데이터를 가지고 최초 필터를 설정하여 리스트 정보 요청
  window.onAppToEventScheme = (message: string) => {
    console.log("FILTER 네이티브에서 전달받은 메시지:", message);

  };

  return (
    <div className="filterWrap">
      {/* 초기화 */}
      {getSelectedFiltersCount > 0 && (
        <span className={"filterTab"} onClick={() => handleReset()}>
          <span> {"초기화"} </span>
          <span className="filterCount">{getSelectedFiltersCount}</span>
        </span>
      )}

      {/* 필터 버튼 */}
      {currentFilters.map((filter, index) => (
        <span
          key={index}
          className="filterTab"
          data-active={
            activeFilter === filter.sortType || filter.selectedName !== ""
          }
          onClick={() => toggleOverlay(filter.sortType)}
        >
          {filter.selectedName === ""
            ? filter.defaultDisplayName
            : filter.selectedName}
          <span>
            <img src={downArrow} alt="filter" />
          </span>
        </span>
      ))}

      {/* 필터 버튼들 */}
      {overlayVisible && activeFilter && (
        <div className="overlay" onClick={handleOverlayClose}>
          <ButtonGroups
            sortType={activeFilter}
            buttons={
              filterCategorys.find((filter) => filter.sortType === activeFilter)
                ?.value || {}
            }
            onButtonClick={handleFilterItemClick}
          />
        </div>
      )}
    </div>
  );
}

export default Filters;
