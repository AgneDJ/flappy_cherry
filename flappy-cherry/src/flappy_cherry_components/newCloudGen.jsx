import React, { useEffect, useState } from "react";
import "../App.css";
import Cloud from "./cloud_1";
import DisplayInfo from "./PositionContext";

function NewCloudGen() {
  const [clouds, setClouds] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const numberOfImages = (Math.random() * 100) / 10;
    const delay = 1000;
    let timers = [];

    for (let i = 0; i < numberOfImages; i++) {
      let timer = setTimeout(() => {
        const topPosition = Math.random() * 100;
        const rightPosition = Math.random() * 100;

        const newCloud = (
          <Cloud
            key={i}
            style={{
              top: `${topPosition}%`,
              right: `${rightPosition}%`,
            }}
          />
        );
        setClouds((prevClouds) => [...prevClouds, newCloud]);
        setPositions((prevPositions) => [
          ...prevPositions,
          { top: topPosition, right: rightPosition },
        ]);
      }, i * delay);

      timers.push(timer);
    }

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      {clouds}
      <DisplayInfo position={positions} />
    </div>
  );
}

export default NewCloudGen;
