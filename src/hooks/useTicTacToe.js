import { useState } from "react";
export default function useTicTacToe(){
    const [board, setBoard] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    const [player, setPlayer] = useState(1);  
    const [winner, setWinner] = useState(null)
    const [score, setScore] = useState([0,0])
    const checkEndGame = (board)=>{
        for (let i = 0; i < 3; i++) { // verificar linha
            if (board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
              return board[i][0]; 
            }
        }
        for (let i = 0; i < 3; i++) { // verificar coluna
            if (board[0][i] !== 0 && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
              return board[0][i]; 
            }
        }
        if (board[0][0] !== 0 && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            return board[0][0]; //verificar diagonal 1
        }
        if (board[0][2] !== 0 && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            return board[0][2]; //verificar diagonal 2
        }
        const BoardFull = board.every(row => row.every(cell => cell !== 0));
        if (BoardFull) {
            return 3; 
        }
        return null
    }
    const handleClick = (row, col) => {
        if (board[row][col] === 0) {  
            const newBoard = board.map((BoardRow, rowPosic) =>
                rowPosic === row ? BoardRow.map((piece, colPosic) => (colPosic === col ? piece = player : piece)) : BoardRow
            );
            
            const result = checkEndGame(newBoard);
            if(result !== null){
                setWinner(result)  
            }else{       
                setPlayer(player === 1 ? 2 : 1);    
            }
            setBoard(newBoard); 
        }  
    };

    const EndGame = (winnerMensage, winner) =>{
        alert(`Resultado: ${winnerMensage}`)
        if(winner !== 3){ // winner == 1 or 2 this is X or O
            const newScore = score.map((score, scorePosic) => scorePosic === winner - 1 ?  score + 1 : score)
            setScore(newScore)
            
        }
        setBoard([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
        setPlayer(1); 
        setWinner(null);
    }
    return{handleClick, board, player, winner,EndGame, score}
}