import React, { useRef, useEffect } from "react";
import "../App.css";

const Cherry = ({ y, r }) => {
  return (
    <div
      className="Cherry"
      style={{
        top: y,
        left: 120,
        transform: `rotate(${r}deg)`,
        transition: "transform 100ms, top 300ms",
      }}
    ></div>
  );
};

export default Cherry;
