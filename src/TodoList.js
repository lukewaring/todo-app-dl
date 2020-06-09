import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo }) => (
  <div>
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={index} todo={todo} deleteTodo={deleteTodo} />;
        })
      : "You have no todos. Add one above!"}
  </div>
);

export default TodoList;
