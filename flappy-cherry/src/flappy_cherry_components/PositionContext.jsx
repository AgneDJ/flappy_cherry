import React, { createContext, useContext, useState } from "react";

const PositionContext = createContext(null);

export const usePosition = () => useContext(PositionContext);

export const PositionProvider = ({ children }) => {
  const [positions, setPositions] = useState([]);

  const updatePosition = (id, newPos) => {
    setPositions((prev) => ({
      ...prev,
      [id]: newPos,
    }));
  };

  const value = { positions, updatePosition };

  return (
    <PositionContext.Provider value={value}>
      {children}
    </PositionContext.Provider>
  );
};
