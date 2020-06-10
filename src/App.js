import React from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends React.Component {
  state = {
    todos: []
  };

  nextTodoId = 0;

  addTodo = input => {
    const newTodo = {
      id: ++this.nextTodoId,
      title: input,
      complete: false
    }
    
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  deleteTodo = todoToDelete => {
    let todoText = todoToDelete.target.parentElement.textContent
    let trimmedTodoText = todoText.substring(0, todoText.length - 1)
    this.setState({
      todos: this.state.todos.filter(todo => todo.title !== trimmedTodoText)
    })
  }

  toggleTodo = todo => {
    todo.complete = !todo.complete
    let todos = this.state.todos
    let filteredTodos = todos.filter((t) => t.id !== todo.id)
    
    this.setState({
      todos: [...filteredTodos, todo]
    })
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h2>My To Do List</h2>
        <TodoInput addTodo={this.addTodo} />
      </header>
      <br></br>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} toggleTodo={this.toggleTodo} />
    </div>
  );
  }
}

export default App;
