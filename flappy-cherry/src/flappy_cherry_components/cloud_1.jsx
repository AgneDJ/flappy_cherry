import React, { useRef, useEffect } from "react";
import "../App.css";

// React component, that generates a cloud (cloud image + image of Lilly)
function Cloud({ style }) {
  return (
    <div>
      <img
        src="../assets/images/cloud.png"
        className="Cloud"
        alt="just a cloud"
        style={style}
      />
      <img
        src="../assets/images/lilly.png"
        className="Lilly"
        alt="Lilly the cat"
        style={style}
      />
    </div>
  );
}

export default Cloud;
