import React, { useState } from "react";
import { DiceGame } from ".";
import { DiceRoll } from "./DiceRoll";

export const GamePlay = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const[score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max-min) + min);
};

const rollDice = () => {
    if(!selectedNum) {
        setError("You not selected a number")
        return
    }
    setError("");

    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);

    if(selectedNum === randomNumber){
        setScore(prev => prev + randomNumber);
    }
    else{
        setScore(prev => prev - 1);
    }

    setSelectedNum(undefined);


};

  console.log(selectedNum);

  return (
    <main>
      <div className="top-container">
        <div className="score">
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>

        <p>{error}</p>

        <div className="boxes">
          {arrNumber.map((value, i) => (
            <div
              isSelected={value === selectedNum}
              className={`box ${value === selectedNum ? "selected" : ""}`}
              key={i}
              onClick={() => setSelectedNum(value)}
            >
              {value}
            </div>
          ))}
        </div>
      </div>

      <DiceRoll
        currentDice = {currentDice}
        rollDice = {rollDice}
      />
    </main>
  );
};
