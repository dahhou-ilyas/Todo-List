import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
function TodoList() {
    const [todos,setTodos]=useState([]);

    const addTodo=(todo)=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos=[todo,...todos]
        setTodos(newTodos)
    }

    const removeTodo=(id)=>{
        const removeArr=[...todos].filter(todo=>todo.id !== id);
        setTodos(removeArr);
    }

    const editTodo=(todoId,newValue)=>{
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
          }
          setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const completTodo=(id)=>{
        let updateTodos=todos.map(todo=>{
            if(todo.id==id){
                todo.isComplete=!todo.isComplete
            }
            return todo
        })
        setTodos(updateTodos)
    }
  return (
    <div>
        <h1>What's the plan for today ?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completTodo={completTodo} removeTodo={removeTodo} editTodo={editTodo}/>
    </div>
  )
}

export default TodoList