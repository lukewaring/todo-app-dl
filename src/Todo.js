import React from 'react';

const Todo = ({ todo, deleteTodo, toggleTodo }) => (
    <li>
      <div>
        <input type="checkbox" onChange={() => toggleTodo(todo)} />
        <span>{todo.title}</span>
        <button onClick={(todoToDelete) => deleteTodo(todoToDelete)}>x</button>
      </div>
    </li>
);

export default Todo;
