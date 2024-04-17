import React, { useEffect, useState } from "react";
import "../App.css";
import Cloud from "./cloud_1";

function NewCloudGen() {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    const numberOfImages = (Math.random() * 100) / 10;
    const delay = 1000;
    let timers = [];

    for (let i = 0; i < numberOfImages; i++) {
      let timer = setTimeout(() => {
        const newCloud = (
          <Cloud
            key={i}
            style={{
              top: `${Math.random() * 100}%`,
              right: `${Math.random() * 100}%`,
            }}
          />
        );
        setClouds((prevClouds) => [...prevClouds, newCloud]);
      }, i * delay);

      timers.push(timer);
    }

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      {clouds}
    </div>
  );
}

export default NewCloudGen;
