import React from "react";
import '../styles/buttonGroups.css';

interface ButtonsProps {
  buttons: string[];
  onButtonClick?: (buttonValue: string) => void;
}

function ButtonGroups({ buttons, onButtonClick }: ButtonsProps) {
  return (
    <div className="overlay">
        <div className="overlayContent">
            {buttons.map((button, index) => (
                
                <button
                key={index}
                className="buttonItem"
                onClick={() => onButtonClick && onButtonClick(buttons[index])}
                >
                {button}
                </button>
                
            ))}
        </div>
    </div>
  );
}

export default ButtonGroups;