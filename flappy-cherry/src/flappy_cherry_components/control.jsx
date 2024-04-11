import React, { useState } from "react";
import Cherry from "./cherry";
import "../App.css";

const Control = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveObject = (direction) => {
    console.log(setPosition);
    setPosition((prevPosition) => {
      switch (direction) {
        case "left":
          return { ...prevPosition, x: prevPosition.x - 10 };
        case "right":
          return { ...prevPosition, x: prevPosition.x + 10 };
        case "up":
          return { ...prevPosition, y: prevPosition.y - 10 };
        case "down":
          return { ...prevPosition, y: prevPosition.y + 10 };
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
