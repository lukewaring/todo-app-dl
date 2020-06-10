import React from 'react'

const Todo = ({ todo, deleteTodo, toggleTodo }) => (
    !todo.complete ?
    (<li style={{ listStyleType: "none" }}>
      <div>
        <input type="checkbox" onChange={() => toggleTodo(todo)} />
        <span>{todo.title}</span>
        <button onClick={() => deleteTodo(todo)}>x</button>
      </div>
    </li>)
    :
    (<li style={{ listStyleType: "none", color: "white", backgroundColor: "gray" }}>
      <div>
        <input checked type="checkbox" onChange={() => toggleTodo(todo)} />
        <span style={{ textDecoration: "line-through" }}>{todo.title}</span>
        <button onClick={() => deleteTodo(todo)}>x</button>
      </div>
    </li>)
)

export default Todo
