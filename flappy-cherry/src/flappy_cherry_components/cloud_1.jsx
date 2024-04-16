import React, { useRef, useEffect } from "react";
import "../App.css";

function Cloud({ style }) {
  return (
    <img
      src="../assets/images/cloud.png"
      className="Cloud"
      alt="just a cloud"
      style={style}
    />
  );
}

export default Cloud;
