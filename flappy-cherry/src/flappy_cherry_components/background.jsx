import React, { useRef, useEffect } from "react";
import "../App.css";
import Cloud from "./cloud_1";

function Background() {
  return (
    <div className="gameBackground">
      <Cloud />
    </div>
  );
}

export default Background;
