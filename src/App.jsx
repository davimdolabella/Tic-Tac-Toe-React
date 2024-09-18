import Board from "./components/Board"
import Score from "./components/Score"
import useTicTacToe from "./hooks/useTicTacToe"
export default function App(){
  const {handleClick, board, player, winner, EndGame, score} = useTicTacToe()
  return(
    <div id="app" className="d-flex flex-column align-items-center pt-3 gap-3">
      <h2>Vez de: {player === 1 ? 'X':'O'}</h2>
      <Score score={score}/>
      <Board handleClick={handleClick} board={board}/>
      {winner !== null ? winner == 1 ? 
        EndGame('X Ganhou!', winner): winner == 2 ?
        EndGame('O Ganhou!', winner): 
        EndGame('Deu Velha!', winner) 
        : null}
    </div>
  )
}