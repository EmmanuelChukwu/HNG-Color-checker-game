import React from "react";

const GameStatus = ({ message }) => {
    return <p className="game-status" data-testid="gameStatus">{message}</p>;
};
  

export default GameStatus;
