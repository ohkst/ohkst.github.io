import React from "react";
import "../styles/buttonGroups.css";

interface ButtonsProps {
  sortType: string;
  buttons: Record<string, string>;
  onButtonClick?: (sortType: string, filterName: string) => void;
}

function ButtonGroups({sortType, buttons, onButtonClick }: ButtonsProps) {
  return (
    <div className="overlay">
      <div className="overlayContent">
        {Object.keys(buttons).map((button, index) => (
          <div
            key={index}
            className="buttonItem"
            onClick={() => onButtonClick && onButtonClick(sortType, Object.keys(buttons)[index])}
          >
            {button}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ButtonGroups;
