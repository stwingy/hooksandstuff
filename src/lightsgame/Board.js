import React,{useReducer} from 'react'
import Cell from './Cell'
import './Board.css'
function reducer(currentState,newState){
    return{
        ...currentState,
        ...newState
    }
}
function makeBoard(rows,cols,chance){
    const board = []
    for(let y=0;y<cols;y++){
        let row =[]
        for(let x=0;x<rows;x++){
          row.push(Math.random()<chance)  
        }
        board.push(row)
    }
    console.log(board)
    return board
    }





function Board({rows=5,cols=5,chance=.4}) {

    const [{sboard,shasWon},setState] = useReducer(reducer,{sboard:makeBoard(rows,cols,chance),shasWon:false})

    
    function flipCellsAround(coord){
        let [y, x] = coord.split("-").map(Number);
        let board = sboard
        function flipCell(y, x) {
            
      
            if (x >= 0 && x < cols && y >= 0 && y < rows) {
              board[y][x] = !board[y][x];
            }
          }
          flipCell(y,x)
          flipCell(y, x - 1); 
          flipCell(y, x + 1); 
          flipCell(y - 1, x); 
          flipCell(y + 1, x);
          let hasWon = board.every(row => row.every(cell => !cell));
          setState({sboard:board,shasWon:hasWon})
    }


    function makeTable() {
        let tblBoard = [];
        for (let y = 0; y < rows; y++) {
          let row = [];
          for (let x = 0; x < cols; x++) {
            let coord = `${y}-${x}`;
            row.push(
              <Cell
                key={coord}
                isLit={sboard[y][x]}
                flipCellsAroundMe={() =>flipCellsAround(coord)}
              />
            );
            
          }
          tblBoard.push(<tr key={y}>{row}</tr>);
        }
        
        return (
          <table className='Board'>
            <tbody>{tblBoard}</tbody>
          </table>
        );
      }
   
        return (
            <div>
              {shasWon ? (
                <div className='winner'>
                  <span className='neon-orange'>YOU</span>
                  <span className='neon-blue'>WIN!</span>
                </div>
              ) : (
                <div>
                  <div className='Board-title'>
                    <div className='neon-orange'>Lights</div>
                    <div className='neon-blue'>Out</div>
                  </div>
                  {makeTable()}
                </div>
              )}
            </div>
          );
    
}

export default Board
/*O---O	OO---
-O-O-	O--O-
OOO--	-O---
--OOO	---O-
O-OO-	----O
-OO-O	O----
OO-OO	--O--*/
