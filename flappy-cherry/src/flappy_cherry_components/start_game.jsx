import React, { useRef, useEffect } from "react";
import "../App.css";
import Background from "../flappy_cherry_components/background";
import Cherry from "../flappy_cherry_components/cherry";

function Game() {
  return (
    <div>
      <Background />
      <Cherry />
    </div>
  );
}

export default Game;
