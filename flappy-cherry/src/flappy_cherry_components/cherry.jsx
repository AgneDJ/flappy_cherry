import React from "react";
import "../App.css";
import cherryImage from "../assets/images/flying_cherry.webp";

//Returns cherry image as a component
function Cherry({ style }) {
  return (
    <div style={style}>
      <img
        src={cherryImage} // imported image, webpack used by create react app handles image correctly, includes it in the build
        className="Cherry"
        alt="flying cherry" // removed underscore for better readability
      />
    </div>
  );
}

export default Cherry;
