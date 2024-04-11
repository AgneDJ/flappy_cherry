import React, { useState } from "react";
import Cherry from "./cherry";
import "../App.css";

const Control = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveObject = (direction) => {
    setPosition((prevPosition) => {
      switch (direction) {
        case "left":
          if (prevPosition.x <= 0) {
            return { ...prevPosition, x: 0 };
          } else {
            return { ...prevPosition, x: prevPosition.x - 10 };
          }

        case "right":
          if (prevPosition.x >= 650) {
            return { ...prevPosition, x: 650 };
          } else {
            return { ...prevPosition, x: prevPosition.x + 50 };
          }

        case "up":
          if (prevPosition.y <= 0) {
            return { ...prevPosition, y: 0 };
          } else {
            return { ...prevPosition, y: prevPosition.y - 50 };
          }
        case "down":
          if (prevPosition.y >= 350) {
            return { ...prevPosition, y: 350 };
          } else {
            return { ...prevPosition, y: prevPosition.y + 10 };
          }
        default:
          return prevPosition;
      }
    });
  };
  return (
    <div>
      <div style={{ position: "relative" }}>
        <button onClick={() => moveObject("left")}>Left</button>
        <button onClick={() => moveObject("right")}>Right</button>
        <button onClick={() => moveObject("up")}>Up</button>
        <button onClick={() => moveObject("down")}>Down</button>
      </div>
      <div
        style={{
          position: "relative",
          left: position.x + "px",
          top: position.y + "px",
          zIndex: 2,
          transition: "left 0.3s, top 0.3s",
        }}
      >
        <Cherry />
      </div>
    </div>
  );
};

export default Control;
