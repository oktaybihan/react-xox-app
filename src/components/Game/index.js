import React, { useState } from "react";
import "./style.css";
import Box from "../Box";

const board = [[], [], []];

function Game() {
  const [turn, setTurn] = useState("X");
  const [winingText, setWinningText] = useState("XOX Oyununa Hoş Geldiniz :)");
  const [display, setDisplay] = useState("d-none");
  const [count, setCount] = useState(0);

  function changeTurn(row, col, count) {
    console.log(count);
    board[row][col] = turn;
    setTurn((turn) => (turn === "X" ? "O" : "X"));
    const winner = checkForWin();
    if (winner === "X" || winner === "O") {
      // Win
      setWinningText("Kazanan " + winner);
      setDisplay("d-block");
    }
  }
  if (count === 9) {
    // Draw
    setWinningText("Kazanan Yok Berabere :)");
    setDisplay("d-block");
    setCount(0);
  }
  function checkForWin() {
    setCount(count + 1);
    console.log("Kac defa girdi !!!", count);
    //col test
    for (let i = 0; i < board.length; i++) {
      const col = board[i];
      if (col[0] === col[1] && col[1] === col[2] && col[0]) {
        //win
        return col[0];
      }
    }
    //row test
    for (let i = 0; i < board.length; i++) {
      const row1 = board[0][i];
      const row2 = board[1][i];
      const row3 = board[2][i];
      if (row1 === row2 && row2 === row3 && row1) {
        //win
        return row1;
      }
    }
    //diogonel test
    const d1 = board[0][0];
    const d2 = board[1][1];
    const d3 = board[2][2];
    if (d1 === d2 && d2 === d3 && d1) {
      return d1;
    }
    const p1 = board[0][2];
    const p2 = board[1][1];
    const p3 = board[2][0];
    if (p1 === p2 && p2 === p3 && p1) {
      return p1;
    }
  }
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div id="game">
      <div
        id="winningText"
        className={display === "d-none" ? "d-block" : "d-none"}
      >
        XOX Oyununa <br /> Hoş Geldiniz :&#41;
      </div>
      <div
        id="winningText"
        className={display === "d-none" ? "d-none" : "d-block"}
      >
        <h3>{winingText}</h3>
        <button className="btnRepeat" onClick={refreshPage}>
          Tekrar Başlat
        </button>
      </div>
      <div className={display === "d-none" ? "d-block" : "d-none"}>
        <div className="row">
          <Box row={0} col={0} currentState={turn} changeTurn={changeTurn} />
          <Box row={0} col={1} currentState={turn} changeTurn={changeTurn} />
          <Box row={0} col={2} currentState={turn} changeTurn={changeTurn} />
        </div>
        <div className="row">
          <Box row={1} col={0} currentState={turn} changeTurn={changeTurn} />
          <Box row={1} col={1} currentState={turn} changeTurn={changeTurn} />
          <Box row={1} col={2} currentState={turn} changeTurn={changeTurn} />
        </div>
        <div className="row">
          <Box row={2} col={0} currentState={turn} changeTurn={changeTurn} />
          <Box row={2} col={1} currentState={turn} changeTurn={changeTurn} />
          <Box row={2} col={2} currentState={turn} changeTurn={changeTurn} />
        </div>
      </div>
    </div>
  );
}

export default Game;
