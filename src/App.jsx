import React, { useState } from "react"
import ColorBox from "./components/colorBox"
import ColorOptions from "./components/ColorOptions"
import GameStatus from "./components/GameStatus";
import Score from "./components/Score";
import NewGameButton from "./components/NewGameButton";
import './App.css'

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const generateColorOptions = (correctColor) => {
  let colors = [correctColor];
  while (colors.length < 6) {
    let newColor = getRandomColor();
    if (!colors.includes(newColor)) {
      colors.push(newColor);
    }
  }
  return colors.sort(() => Math.random() - 0.5); // Shuffle colors
};

const App = () => {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [colors, setColors] = useState(generateColorOptions(targetColor));
  const [gameStatus, setGameStatus] = useState("Guess the correct color!");
  const [score, setScore] = useState(0);

  const handleGuess = (selectedColor) => {
    if (selectedColor === targetColor) {
      setGameStatus("✅ Correct! Well done!");
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore >= 10) {
          setTimeout(() => {
            alert("🎉 Yay, you win!! 🎉");
            resetGame();
          }, 500);
        }
        return newScore;
      });
    } else {
      setGameStatus("❌ Wrong! Try again.");
      setScore((prevScore) => {
        const newScore = Math.max(prevScore - 2, 0);
        if (prevScore > 0 && newScore === 0) {  // Ensure player had score before losing
          setTimeout(() => {
            alert("💀 You Lose!! 💀");
            resetGame();
          }, 500);
        }
        return newScore;
      });
    }
  
    // Generate new colors after a short delay
    setTimeout(() => {
      if (score > 0 && score < 10) {
        const newTargetColor = getRandomColor();
        setTargetColor(newTargetColor);
        setColors(generateColorOptions(newTargetColor));
      }
    }, 500);
  };
  

  const resetGame = () => {
    const newColor = getRandomColor();
    setTargetColor(newColor);
    setColors(generateColorOptions(newColor));
    setGameStatus("Guess the correct color!");
    setScore(0);
  };

  return (
    <div className="game-container">
      <h1>Color Guessing Game</h1>
      <h2 className="game-h2"data-testid="gameInstructions">Guess the correct color! You win if the score gets to 10. You lose if it goes to 0.</h2>
      <ColorBox color={targetColor} />
      <ColorOptions colors={colors} handleGuess={handleGuess} />
      <GameStatus message={gameStatus} />
      <Score score={score} />
      <NewGameButton resetGame={resetGame} />
    </div>
  );
};


export default App;

