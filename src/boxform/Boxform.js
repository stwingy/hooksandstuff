import React from 'react'
import uuid from "uuid/v4";
import useSignUpForm from './useSignUpForm'
import "./Boxform.css"
function Boxform(props) {
    
    const {inputs, handleInputChange, handleSubmit,reset} = useSignUpForm({height:"",width:"",backgroundColor:""}, calBack);
    function calBack(){
        
        const newBox = { ...inputs, id: uuid() };
       props.createBox(newBox);
        // this.setState({
        //   height: "",
        //   width: "",
        //   color: ""
        // });
        reset()
    }
       
      

    return (
        <form onSubmit={handleSubmit}>
        <div className ="formdiv">
          <label htmlFor='height'>Height</label>
          <input
            type='text'
            name='height'
            value={inputs.height}
            onChange={handleInputChange}
            id='height'
          />
        </div>
        <div className ="formdiv">
          <label htmlFor='width'>Width</label>
          <input
            type='text'
            name='width'
            value={inputs.width}
            onChange={handleInputChange}
            id='width'
          />
        </div>
        <div className ="formdiv">
          <label htmlFor='color'>Color</label>
          <input
            type='text'
            name='backgroundColor'
            value={inputs.backgroundColor}
            onChange={handleInputChange}
            id='color'
          />
        </div>
        <div className ="formdiv">
        <button>Add New Box!</button>
        </div>
        
      </form>
    )
}

export default Boxform
