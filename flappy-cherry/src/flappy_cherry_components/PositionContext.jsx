import React from "react";

function DisplayInfo({ position }) {
  return (
    <div>
      Current Position: X: {position.x}, Y: {position.y}
    </div>
  );
}

export default DisplayInfo;
