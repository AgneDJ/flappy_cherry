import React, { useState, useEffect } from "react";
import Game from "./flappy_cherry_components/start_game";
import Cherry from "./cherry";
import Cloud from "./cloud_1";
import DisplayInfo from "./PositionContext";
import "../App.css";

const Over = () => {
  //create two components: game over and checking
  //when collision happens: stop the game, show score table, show 'game over'
  // get current cherry position;
  // get any generated cloud position;
  // check if current cherry position overlaps cloud position
  // if yes: stop Game
  // if no: continue checking
};

export default Over;
