import useTictacToe from "./boxes";

function TicTacToe() {
  const {board, handleClick, resetGame, getStatusMessage} = useTictacToe();

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-slate-900 to-slate-700 fixed">
    <div className="mx-auto text-center text-blue-200 h-auto w-auto p-2">
      <div>
        <div className="text-3xl p-2 my-2 font-bold font-sans">
        {getStatusMessage()}
        </div>
        <button className="p-2 font-bold bg-blue-500 rounded-2xl text-blue-100 cursor-pointer" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4 w-fit mx-auto my-3">
        {board.map((b, index) =>{
          return (
            <button
              className="border-2 border-blue-200 text-blue-100 h-32 w-32
              text-8xl rounded-xl cursor-pointer caret-transparent 
              text-center flex items-center justify-center 
              transition-transform duration-400 hover:scale-110 active:scale-110"
              
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default TicTacToe;