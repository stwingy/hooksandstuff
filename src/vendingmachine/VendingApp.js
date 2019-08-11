import React from 'react'
import VendingMachine from './VendingMachine'

function VendingApp(props) {
   
    return (
        <div className = "VendingApp" >
            <VendingMachine path={props.match.url}/>
            
        </div>
    )
}

export default VendingApp
