import React, { useState, useEffect } from "react";
import Cherry from "./cherry";
import DisplayInfo from "./PositionContext";
import "../App.css";

const Control = () => {
  const [cherryPosition, setCherryPosition] = useState({ x: 100, y: 100 });
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
        x: cherryPosition.x + newVelocityWithFriction.x,
        y: cherryPosition.y + newVelocityWithFriction.y,
      };

      // Boundary check
      const minX = 0;
      const maxX = 650;
      const minY = 0;
      const maxY = 370;

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

      setCherryPosition(newPosition);
      setVelocity(newVelocityWithFriction);
    };

    const gameLoop = setInterval(updatePosition, 1000 / 60);

    return () => clearInterval(gameLoop);
  }, [cherryPosition, velocity]);

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
          left: cherryPosition.x + "px",
          top: cherryPosition.y + "px",
          transition: "left 0.1s, top 0.1s",
          zIndex: 2,
        }}
      >
        <Cherry />
        <DisplayInfo cherryPosition={cherryPosition} />
      </div>
    </div>
  );
};

export default Control;
