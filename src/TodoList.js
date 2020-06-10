import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

  render() {
    // console.log(this.props.todos.filter(todo => todo.complete === false))
    return (
      <ul className="todo-list-active">
    {this.props.todos && this.props.todos.length
      ? this.props.todos.map((todo, index) => {
          return <Todo key={index} todo={todo} deleteTodo={this.props.deleteTodo} toggleTodo={this.props.toggleTodo} />;
        })
      : "You have no todos. Add one above!"}
  </ul>
    )
  }
}

export default TodoList;
