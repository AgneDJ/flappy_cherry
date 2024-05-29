import React from "react";
import "../App.css";

// Creates Cherry component
function Cherry({ style }) { // Style is added as prop
  return ( 
    // Returns cherry image
    <div style={style}>
      <img
        src="../assets/images/flying_cherry.webp"
        className="Cherry"
        alt="flying_cherry"
      />
    </div>
  );
}

export default Cherry;