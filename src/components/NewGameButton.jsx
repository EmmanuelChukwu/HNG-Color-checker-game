import React from "react";

const NewGameButton = ({ resetGame }) => {
    return (
      <button className="new-game-button" onClick={resetGame} data-testid="newGameButton">
        New Game
      </button>
    );
  };
  

export default NewGameButton;
