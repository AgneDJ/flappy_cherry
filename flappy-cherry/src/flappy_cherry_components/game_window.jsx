import React, { useRef, useEffect } from "react";
import "../App.css";
import Control from "./control";
import Background from "./background";

function Window() {
  return (
    <div id="gameWindow">
      <div>
        <Background />
      </div>
      <div>
        <Control />
      </div>
    </div>
  );
}

export default Window;
