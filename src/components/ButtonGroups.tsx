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
                
                <div
                key={index}
                className="buttonItem"
                onClick={() => onButtonClick && onButtonClick(buttons[index])}
                >
                {button}
                </div>
                
            ))}
        </div>
    </div>
  );
}

export default ButtonGroups;