import React, { useRef, useEffect } from "react";
import "../App.css";
import Control from "./control";
import Background from "./background";
import DisplayInfo from "./PositionContext";

function Window() {
  return (
    <div id="gameWindow">
      <div>
        <Background />
      </div>
      <div>
        <Control />
        <DisplayInfo />
      </div>
    </div>
  );
}

export default Window;
