import React, { useState, useEffect } from "react";
import Cloud from "./cloud_1";
import "../App.css";

function NewCloudGen() {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    const numberOfImages = 5;
    const newClouds = [];

    for (let i = 0; i < numberOfImages; i++) {
      const leftPos = Math.random() * 100;
      const topPos = Math.random() * 100;
      console.log(`Cloud ${i}: left ${leftPos}%, top ${topPos}%`); // Debugging output

      newClouds.push(
        <Cloud
          key={i}
          className="cloud"
          style={{
            left: `${leftPos}%`,
            top: `${topPos}%`,
            position: "absolute",
          }}
        />
      );
    }

    setClouds(newClouds);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      {" "}
      {/* Ensure container is large enough */}
      {clouds}
    </div>
  );
}

export default NewCloudGen;
