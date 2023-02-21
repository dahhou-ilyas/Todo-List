import React,{useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineEdit} from 'react-icons/ai'

function Todo({todos,completeTodo,removeTodo,editTodo}) {
    const [edit,setEdit]=useState({
        id:null,
        value:''
    })

    const submitUpdate = value=>{
        editTodo(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
    }
    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return todos.map((todo, index) =>{
        return (<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <AiOutlineClose
                onClick={()=>removeTodo(todo.id)}
                className='delete-icon'/>
                <AiOutlineEdit
                onClick={()=>{setEdit({id:todo.id,value:todo.text})}}
                className='edit-icon'/>
            </div>
        </div>)
    })
    
}

export default Todo