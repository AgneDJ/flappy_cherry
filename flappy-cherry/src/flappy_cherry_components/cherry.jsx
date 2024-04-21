import React from "react";
import "../App.css";

function Cherry({ style }) {
  return (
    <div style={style}>
      {" "}
      {/* Apply style prop to the div */}
      <img
        src="../assets/images/cherry.png"
        className="Cherry"
        alt="A cherry"
      />
    </div>
  );
}

export default Cherry;
