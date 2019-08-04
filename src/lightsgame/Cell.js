import React from 'react'
import './Cell.css'
function Cell({isLit,flipCellsAroundMe}) {

let classes ="Cell"+(isLit ? " Cell-lit":"")

   function handleClick(e){
    flipCellsAroundMe()
    }

    return (
        <td className = {classes} onClick = {handleClick}>
            Cell
        </td>
    )
}

export default Cell

