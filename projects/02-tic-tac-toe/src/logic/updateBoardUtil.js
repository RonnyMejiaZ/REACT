import confetti from "canvas-confetti";
import { TURNS } from "../constants.js";
import { checkEndGame, checkWinner } from "./board.js";
import { setLocalStorage } from "./index.js";

export function updateBoardUtil(index, board, setBoard, turn, setTurn, setWinner, winner) {
  if (board[index] || winner) return;

  // ...board va a traer la data anterior
  const newBoard = [...board];
  // turn puede ser X o O
  newBoard[index] = turn;
  setBoard(newBoard);

  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
  setTurn(newTurn);

  setLocalStorage(newBoard, newTurn);

  const newWinner = checkWinner(newBoard);
  if (newWinner) {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
    setWinner(newWinner);
  } else if (checkEndGame(newBoard)) {
    setWinner(false);
  }
}