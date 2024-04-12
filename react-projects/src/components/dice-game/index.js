import React, { useState } from "react";
import { GameMenu } from "./GameMenu";
import "./styles.css";
import { GamePlay } from "./GamePlay";

export const DiceGame = () => {
  const [isGameStart, setIsGameStart] = useState(false);

  const toggleGameplay = () => {
    setIsGameStart((prev) => !prev);
  };

  return (
    <>
      {
        isGameStart ? <GamePlay/> : <GameMenu toggle = {toggleGameplay}/>
      }
    </>
  );
};
