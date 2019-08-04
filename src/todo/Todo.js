import React,{useState} from 'react';
import './Todo.css'
function Todo({ todo, id, dispatch,completed }) {
    const[isEditing,setIsEditing] = useState(false)
    const[task,setTask] =useState(todo)
console.log("com",completed)
    function toggleEdit(){
        setIsEditing(!isEditing)
    }
    function handleUpdate(e){
        e.preventDefault()
        dispatch({type:"EDIT",payload:{task,id}})
        toggleEdit()
    }
    function handleChange(e){
        setTask(e.target.value)
    }
    function toggleComplete(){
        dispatch({type:"TOGGLECOMPLETE",id})
    }
	return !isEditing?(
		<div className ="Todo">
			<li className ={completed?" completed":"Todo-task"} onClick ={toggleComplete}>{todo}</li>
            <div className='Todo-buttons'>
			<button onClick={() => dispatch({ type: 'REMOVE', id: id })}><i className='fas fa-trash' /></button>
			<button onClick ={toggleEdit}><i className='fas fa-pen' /></button>
            </div>
		</div>
	):(
        <div className ="Todo">
        <form onSubmit ={handleUpdate} className='Todo-edit-form'>
            <input type ="text" name ="task" onChange = {handleChange} value ={task}/>
            <button>save</button>
        </form>
        </div>
    )
}

export default Todo;
