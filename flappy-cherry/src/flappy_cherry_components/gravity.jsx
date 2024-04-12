import React, { useState, useEffect } from "react";
import Cherry from "./cherry"; // Assuming Cherry is your game element component
import "../App.css";

const GravityGame = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const gravity = 0.5; // Gravity constant
    const friction = 0.99; // Friction to simulate air resistance

    const updatePosition = () => {
      // Apply gravity to the vertical velocity
      const newVelocity = { ...velocity, y: velocity.y + gravity };

      // Apply friction to slow down horizontal velocity
      const newVelocityWithFriction = {
        x: velocity.x * friction,
        y: newVelocity.y, // vertical velocity remains unaffected by friction
      };

      // Update the position based on velocity
      const newPosition = {
        x: position.x + newVelocityWithFriction.x,
        y: position.y + newVelocityWithFriction.y,
      };

      // Update state
      setPosition(newPosition);
      setVelocity(newVelocityWithFriction);
    };

    const gameLoop = setInterval(() => {
      updatePosition();
    }, 1000 / 60); // 60 frames per second

    return () => clearInterval(gameLoop);
  }, [position, velocity]); // useEffect dependency on position and velocity

  const jump = () => {
    // Increase vertical velocity to simulate jumping
    setVelocity({ ...velocity, y: -10 }); // Adjust -10 as needed for desired jump height
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          left: position.x + "px",
          top: position.y + "px",
          transition: "left 0.1s, top 0.1s", // Transition for smoother movement
        }}
      >
        <Cherry />
      </div>
      <button onClick={jump}>Jump</button>
    </div>
  );
};

export default GravityGame;
