import React from "react";

const ColorBox = ({ color }) => {
    return <div className="color-box" style={{ backgroundColor: color }} data-testid="colorBox"></div>;
};
  

export default ColorBox;
