import React, { useContext } from 'react';
import myContext from './context';
import './Die.css'

function Die(props) {
    const { handleClick } = useContext(myContext);

        const numberWords= ["one", "two", "three", "four", "five", "six"]
        
      const {  locked,  disabled, rolling,val,idx } = props

        let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
        if (locked) classes += "Die-locked";
        if (rolling) classes += "Die-rolling";
        function handleClick1() {
         handleClick(idx);
          }
        return (
          <i className={classes} onClick={handleClick1} disabled={disabled} />
        );
}

export default Die
