import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
      style={{
        color: value === "X" ? "#0E4758" : value === "O" ? "#15818E" : "#1DBDCB",
      }}
    >
      {value}
    </button>
  );
}


export default function Board() { 

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(25).fill(null));
  const winner = calculateWinner(squares);
  const isBoardFull = squares.every(square => square !== null);

  let status;
  if (winner) {
    status = winner + " a gagné !";
  } else if (isBoardFull) {
    status = "Match nul !";
  } else {
    status = "Prochain joueur : " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setSquares(Array(25).fill(null));
    setXIsNext(true);
  }

  return (
    <>
    <div className='titleAndRules'>
      <h1 className="statusTitle">Tic-Tac-Toe</h1>
        <p className="rulesContainer">
        Le premier joueur à aligner 4 symboles gagne ! Si la grille est pleine sans vainqueur, c’est un match nul.
        </p>
    </div>
    <div className='gamePart'>
        <div className="status">{status}</div>
        <div className='plateauJeu'>
          <div className="boardRow">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
          </div>
          <div className="boardRow">
            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            <Square value={squares[9]} onSquareClick={() => handleClick(9)}/>
          </div>
          <div className="boardRow">
            <Square value={squares[10]} onSquareClick={() => handleClick(10)}/>
            <Square value={squares[11]} onSquareClick={() => handleClick(11)}/>
            <Square value={squares[12]} onSquareClick={() => handleClick(12)}/>
            <Square value={squares[13]} onSquareClick={() => handleClick(13)}/>
            <Square value={squares[14]} onSquareClick={() => handleClick(14)}/>
          </div>
          <div className="boardRow">
            <Square value={squares[15]} onSquareClick={() => handleClick(15)}/>
            <Square value={squares[16]} onSquareClick={() => handleClick(16)}/>
            <Square value={squares[17]} onSquareClick={() => handleClick(17)}/>
            <Square value={squares[18]} onSquareClick={() => handleClick(18)}/>
            <Square value={squares[19]} onSquareClick={() => handleClick(19)}/>
          </div>
          <div className="boardRow">
            <Square value={squares[20]} onSquareClick={() => handleClick(20)}/>
            <Square value={squares[21]} onSquareClick={() => handleClick(21)}/>
            <Square value={squares[22]} onSquareClick={() => handleClick(22)}/>
            <Square value={squares[23]} onSquareClick={() => handleClick(23)}/>
            <Square value={squares[24]} onSquareClick={() => handleClick(24)}/>
          </div>
        </div>
        <button className="resetButton" onClick={resetGame}>Nouvelle partie ?</button>
      </div>
      <i>Designed by <a href='https://www.freepik.com/author/kenshinstock' alt="lien vers site Freepik et la page de Kenshinstock" target="_blank">Kenshinstock</a> & <a href="https://anais-diez.vercel.app/" alt="lien vers site perso Anaïs Diez"  target="_blank">Anaïs DIEZ</a></i>
    </> 
  );
}

function calculateWinner(squares) {
  const lines = [
    // Lignes
    [0, 1, 2, 3], [1, 2, 3, 4],
    [5, 6, 7, 8], [6, 7, 8, 9],
    [10, 11, 12, 13], [11, 12, 13, 14],
    [15, 16, 17, 18], [16, 17, 18, 19],
    [20, 21, 22, 23], [21, 22, 23, 24],

    // Colonnes
    [0, 5, 10, 15], [5, 10, 15, 20],
    [1, 6, 11, 16], [6, 11, 16, 21],
    [2, 7, 12, 17], [7, 12, 17, 22],
    [3, 8, 13, 18], [8, 13, 18, 23],
    [4, 9, 14, 19], [9, 14, 19, 24],

    // Diagonales ↘
    [0, 6, 12, 18], [1, 7, 13, 19],
    [5, 11, 17, 23], [6, 12, 18, 24],

    // Diagonales ↙
    [3, 7, 11, 15], [4, 8, 12, 16],
    [9, 13, 17, 21], [8, 12, 16, 20]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
      return squares[a];
    }
  }
  return null;
}



