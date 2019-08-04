import React,{useReducer} from 'react'
import Boxform from './Boxform'
import Box from './Box'
import './BoxList.css'
function reducer(currentState,newState){
    return{
        ...currentState,
        ...newState
    }
    }

function BoxList() {

    const [state,setState] =useReducer(reducer,{boxes:[]})
   function create(newBox) {
       setState({
          boxes: [...state.boxes, newBox]
        });
      }
      function remove(id){
const b=state.boxes.filter((box=>box.id !==id))
setState({boxes:b})
      }
      function renderBoxes(){
return state.boxes.map(box => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      backgroundColor={box.backgroundColor}
      removeBox={() => remove(box.id)}
    />
  ))
      }
    return (
        <div className ="gridholder">
            <Boxform createBox ={create}/>
            <div className = "grid">
            {renderBoxes()}
            </div>
           
        </div>
    )
}

export default BoxList
