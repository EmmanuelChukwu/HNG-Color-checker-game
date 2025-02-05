import React from "react";

const ColorOptions = ({ colors, handleGuess }) => {
    return (
      <div className="color-options">
        {colors.map((color, index) => (
          <button
            key={index}
            className="color-option"
            style={{ backgroundColor: color }}
            onClick={() => handleGuess(color)}
            data-testid="colorOption"
          ></button>
        ))}
      </div>
    );
};
  

export default ColorOptions;
