import React, { useRef, useEffect } from "react";
import "../App.css";

// Creates Cherry component
function Cherry() {
  return (
    // Returns cherry image
    <img
      src="../assets/images/flying_cherry.webp"
      className="Cherry"
      alt="flying_cherry"
    />
  );
}

// const Cherry = ({ y }) => {
//   return (
//     <div>
//       <img
//         src="../assets/images/flying_cherry.webp"
//         className="Cherry"
//         alt="flying_cherry"
//       />
//     </div>
//   );
// };

export default Cherry;
