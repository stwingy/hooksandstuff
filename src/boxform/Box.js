import React from 'react'

function Box(props) {
    console.log(props)
    return (
        <div style={{justifySelf:"center"}}>
          <div style ={{height:`${props.height}em`,width:`${props.width}em`, backgroundColor:props.backgroundColor,display:"flex",justifyContent:"center"}}>
          <button onClick ={props.removeBox} style={{alignSelf:"center"}}>DELETE</button>
          </div>
        
        </div>
    )
}

export default Box
