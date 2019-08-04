import React,{useContext} from 'react'
import './RuleRow.css'
import myContext from './context'
function RuleRow(props) {
  const { state, setState,scoreReducer } = useContext(myContext);
    const { id, name, doScore, description,score } = props;
    const disabled = state.disArray[id]
   
   function scoreSome(){
doScore(id)
setState({nulled:true})
    }
    return (
      <tr
        className={`RuleRow RuleRow-${disabled ? "disabled" : "active"}`}
        onClick={disabled || state.nulled ? null : scoreSome}
      >
        <td className='RuleRow-name'>{name}</td>
        <td className='RuleRow-score'>{disabled ? score : description}</td>
      </tr>
    );
  }


export default RuleRow
