import React, { useContext } from 'react';
import myContext from './context';
import Die from './Die'
import './Dice1.css'
function Dice(props) {
    const { state } = useContext(myContext);

    return (
        <div className='Dice1'>
        {state.diceArray.map((d, idx) => (
          <Die
           
            val={d}
            locked={state.locked[idx]}
            idx={idx}
            key={idx}
            disabled={props.disabled}
            rolling={state.rolling && !state.locked[idx]}
          />
        ))}
      </div>
    )
}

export default Dice
