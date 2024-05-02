import React from "react";

function DisplayInfo({ cherryPosition, cloudPositions }) {
  return (
    <div>
      {cherryPosition && typeof cherryPosition === "object" && (
        <div>
          Cherry Position: X: {cherryPosition.x}, Y: {cherryPosition.y}
        </div>
      )}

      {Array.isArray(cloudPositions) && (
        <div>
          <h3>Cloud Positions:</h3>
          {cloudPositions.map((pos, index) => (
            <div key={index}>
              Cloud {index}: X: {pos.right}%, Y: {pos.top}%
            </div>
          ))}
        </div>
      )}

      {!cherryPosition && (!cloudPositions || cloudPositions.length === 0) && (
        <p>No position data available</p>
      )}
    </div>
  );
}

export default DisplayInfo;
