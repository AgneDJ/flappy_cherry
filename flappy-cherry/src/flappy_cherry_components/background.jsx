import React, { useRef, useEffect } from "react";
import "../App.css";
import Cloud from "./cloud_1";
import NewCloudGen from "./newCloudGen";

function Background() {
  return (
    <div className="gameBackground">
      <NewCloudGen />
      {/* <Cloud /> */}
    </div>
  );
}

export default Background;
