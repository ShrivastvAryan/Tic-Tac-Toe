import React, { useState } from "react";

export const GameBoard = () => {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], // Rows
        [0,3,6], [1,4,7], [2,5,8], // Columns
        [0,4,8], [2,4,6]           // Diagonals
    ];

    const [board, setBoard] = useState(Array(9).fill(""));
    const [turn0, setTurn0] = useState(true);
    const [winner, setWinner] = useState(null);

    const checkWinner = (newBoard) => {
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                setWinner(newBoard[a]); // Set the winner (X or O)
                return;
            }
        }
    };

    const handleClick = (index) => {
        if (board[index] || winner) return; // Prevent changes if cell is filled or game is won

        const newBoard = [...board];
        newBoard[index] = turn0 ? "X" : "O";
        setBoard(newBoard);
        setTurn0(!turn0);
        checkWinner(newBoard);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(""));
        setTurn0(true);
        setWinner(null);
    };

    return (
        <>
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-blue-100 mb-4">Tic Tac Toe</h1>
            <div className="grid grid-cols-3 gap-2">
                {board.map((value, index) => (
                    <Playbox key={index} value={value} onClick={() => handleClick(index)} />
                ))}
            </div>
            {winner && <h2 className="text-2xl text-green-500 mt-4">Winner: {winner}!</h2>}
            <ResetButton reset={resetGame} />
        </div>
        </>
    );
};

export const Playboxes = ({ value, onClick }) => {
    return (
        <div 
            className="border-2 border-blue-200 text-blue-100 h-24 w-24 
                       text-6xl rounded-xl cursor-pointer caret-transparent 
                       text-center flex items-center justify-center 
                       transition-transform duration-400 hover:scale-110 active:scale-110" 
            onClick={onClick}
        >
            {value}
        </div>
    );
};

export const ResetButton = ({ reset }) => {
    return (
        <button 
            className="mx-auto flex my-10 text-black font-bold font-sans bg-blue-300 p-3 
                       rounded-xl cursor-pointer transition-transform duration-400 hover:scale-110" 
            onClick={reset}
        >
            Reset Game
        </button>
    );
};
