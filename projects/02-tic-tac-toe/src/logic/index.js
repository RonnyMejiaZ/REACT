export function setLocalStorage(board, turn) {
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("turn", turn);
}

export function getLocalStorage() {
  return {
    board: JSON.parse(window.localStorage.getItem("board")),
    turn: window.localStorage.getItem("turn"),
  };
}

export function resetLocalStorage() {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
}
