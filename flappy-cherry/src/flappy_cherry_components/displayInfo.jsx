import React, { useEffect, useCallback } from "react";
import PositionContext from "./PositionContext";

function DisplayInfo({ cherryPosition, cloudPositions }) {
  const checkCollision = useCallback(
    (cloudPos) => {
      console.log("Checking collision:");
      console.log("Cherry Position:", cherryPosition);
      console.log("Cloud Position:", cloudPos);

      const collisionDetected =
        Math.abs(cherryPosition.x - cloudPos.x) < 50 &&
        Math.abs(cherryPosition.y - cloudPos.y) < 50;

      console.log("Collision Detected:", collisionDetected);
      return collisionDetected;
    },
    [cherryPosition]
  );

  useEffect(() => {
    if (cherryPosition && Array.isArray(cloudPositions)) {
      cloudPositions.forEach((pos, index) => {
        if (checkCollision(pos)) {
          console.log(`Collision with cloud ${index}`);
          alert(`Colliding with Cherry and cloud ${index}!`);
        }
      });
    }
  }, [cherryPosition, cloudPositions, checkCollision]);

  return (
    <div>
      {cherryPosition && (
        <div>
          Cherry Position: X: {cherryPosition.x}, Y: {cherryPosition.y}
        </div>
      )}
      {Array.isArray(cloudPositions) && (
        <div>
          <h3>Cloud Positions:</h3>
          {cloudPositions.map((pos, index) => (
            <div key={index}>
              Cloud {index}: X: {pos.x}%, Y: {pos.y}%
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
