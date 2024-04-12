import React, { useState, useEffect } from "react";
import Cherry from "./cherry";
import "../App.css";

const Control = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const gravity = 0.2;
    const friction = 0.2;

    const updatePosition = () => {
      const newVelocity = { ...velocity, y: velocity.y + gravity };

      const newVelocityWithFriction = {
        x: velocity.x * friction,
        y: newVelocity.y,
      };

      const newPosition = {
        x: position.x + newVelocityWithFriction.x,
        y: position.y + newVelocityWithFriction.y,
      };
      //Boundary check
      if (newPosition.x < 0) {
        newPosition.x = 0;
      } else if (newPosition.x > 700) {
        newPosition.x = 650;
      }

      if (newPosition.y < 0) {
        newPosition.y = 0;
        setVelocity({ ...newVelocityWithFriction, y: 0 });
      } else if (newPosition.y > 370) {
        newPosition.y = 370;
        setVelocity({ ...newVelocityWithFriction, y: 0 });
      }

      setPosition(newPosition);
      setVelocity(newVelocityWithFriction);
    };

    const gameLoop = setInterval(() => {
      updatePosition();
    }, 1000 / 60);

    return () => clearInterval(gameLoop);
  }, [position, velocity]);

  const fly = () => {
    setVelocity({ ...velocity, y: -10 });
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          left: position.x + "px",
          top: position.y + "px",
          transition: "left 0.1s, top 0.1s",
          zIndex: 2,
        }}
      >
        <Cherry />
      </div>
      <button onClick={fly}>Fly</button>
    </div>
  );
};

export default Control;
