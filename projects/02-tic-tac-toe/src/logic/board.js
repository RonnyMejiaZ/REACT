import { Square } from "../components/Square.jsx";
import { TURNS, WINNER_COMBOS } from "../constants.js";

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]; // puede ser X o O
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};

export const resetGameUtil = (setBoard, setTurn, setWinner) => {
  setBoard(Array(9).fill(null));
  setTurn(TURNS.X);
  setWinner(null);
};
