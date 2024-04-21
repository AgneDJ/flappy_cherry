import React from "react";
import Control from "./control";
import NewCloudGen from "./newCloudGen";

function DisplayInfo({ position }) {
  return (
    <div>
      <div>
        Current Position: X: {position.x}, Y: {position.y}
      </div>
      <div>
        <h3>Cloud Positions:</h3>
        {position.map((pos, index) => (
          <div key={index}>
            Cloud {index}: X: {pos.right}%, Y: {pos.top}%
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayInfo;
