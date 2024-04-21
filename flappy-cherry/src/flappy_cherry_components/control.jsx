import React, { useState, useEffect } from "react";
import Cherry from "./cherry";
import DisplayInfo from "./PositionContext";
import "../App.css";

const Control = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });

  const useKeyDown = (callback, keys) => {
    const onKeyDown = (event) => {
      if (keys.includes(event.key)) {
        event.preventDefault();
        callback(event.key, event);
      }
    };

    useEffect(() => {
      document.addEventListener("keydown", onKeyDown);
      return () => {
        document.removeEventListener("keydown", onKeyDown);
      };
    }, [onKeyDown]);
  };

  useEffect(() => {
    const gravity = 0.2;
    const friction = 0.8;

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

      // Boundary check
      const minX = 0;
      const maxX = 650; // Adjusted maximum X position
      const minY = 0;
      const maxY = 370; // Adjusted maximum Y position

      if (newPosition.x < minX) {
        newPosition.x = minX;
      } else if (newPosition.x > maxX) {
        newPosition.x = maxX;
      }

      if (newPosition.y < minY) {
        newPosition.y = minY;
        setVelocity({ ...newVelocityWithFriction, y: 0 });
      } else if (newPosition.y > maxY) {
        newPosition.y = maxY;
        setVelocity({ ...newVelocityWithFriction, y: 0 });
      }

      setPosition(newPosition);
      setVelocity(newVelocityWithFriction);
    };

    const gameLoop = setInterval(updatePosition, 1000 / 60);

    return () => clearInterval(gameLoop);
  }, [position, velocity]);

  useKeyDown(
    (key) => {
      if (key === " ") {
        fly();
      }
    },
    [" "]
  );

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
        <DisplayInfo position={position} />
      </div>
    </div>
  );
};

export default Control;
