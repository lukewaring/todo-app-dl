import React from 'react'
import '../styles/Todo.css'

const Todo = ({ todo, deleteTodo, toggleTodo }) => (
    <li className={ todo.complete ? "li completed" : "li" } >
        <input className="checkbox" type="checkbox" checked={ todo.complete ? "checked" : "" } onChange={() => toggleTodo(todo)}/>
        <span className={ todo.complete ? "span-completed" : "" } onClick={() => toggleTodo(todo)}>{todo.title}</span>
        <button className={ todo.complete ? "completed" : "" } onClick={() => deleteTodo(todo)}>x</button>
    </li>
)

export default Todo
