import React, { useRef, useEffect } from "react";
import "../App.css";

const Cherry = ({ y, r }) => {
  return (
    <div>
      <img
        src="../assets/images/flying_cherry.webp"
        className="Cherry"
        alt="flying_cherry"
        style={{
          top: y,
          left: 120,
          transform: `rotate(${r}deg)`,
          transition: "transform 100ms, top 300ms",
          height: 50,
          width: 50,
        }}
      />
    </div>
  );
};

export default Cherry;
