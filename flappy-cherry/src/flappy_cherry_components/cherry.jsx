import React from "react";
import "../App.css";

//Returns cherry image as a component
function Cherry({ style }) {
  return (
    <div style={style}>
      {" "}
      <img
        src="../assets/images/cherry.png"
        className="Cherry"
        alt="A cherry"
      />
    </div>
  );
}

export default Cherry;
