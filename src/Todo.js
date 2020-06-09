import React from 'react';

const Todo = ({ todo, deleteTodo }) => (
  <div>
    <li>
        {todo.title}
        <button onClick={(todoToDelete) => deleteTodo(todoToDelete)}>x</button>
    </li>
    
  </div>
);

export default Todo;
