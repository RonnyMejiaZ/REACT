import { useState } from "react";
import "./App.css";
import { Square } from "./components/Square.jsx";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { TURNS } from "./constants.js";
import { resetGameUtil } from "./logic/board.js";
import { getLocalStorage, resetLocalStorage } from "./logic/index.js";
import { Board } from "./components/Board.jsx";
import { updateBoardUtil } from "./logic/updateBoardUtil.js";

function App() {
  const [board, setBoard] = useState(() => {
    // llamaremos el json que guardamos en el storage y lo volveremos a convertir en objetos con .parse
    const boardFromStorage = getLocalStorage().board;
    return boardFromStorage
      ? getLocalStorage().board
      : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = getLocalStorage().turn;
    return turnFromStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    resetGameUtil(setBoard, setTurn, setWinner);
    resetLocalStorage();
  };

  const updateBoard = (index) => {
    updateBoardUtil(index, board, setBoard, turn, setTurn, setWinner, winner);
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame} aria-label="Reset game">Reset del juego</button>
      <Board board={board} updateBoard={updateBoard} />

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
