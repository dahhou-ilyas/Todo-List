import React,{useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineEdit} from 'react-icons/ai'

function Todo({todos,completeTodo}) {
    const [edit,setEdit]=useState({
        id:null,
        value:''
    })
    return todos.map((todo, index) =>{
        return (<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <AiOutlineClose/>
                <AiOutlineEdit/>
            </div>
        </div>)
    })
    
}

export default Todo