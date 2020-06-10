/* eslint-disable array-callback-return */

import React from 'react'
import './styles/App.css'
import TodoInput from './components/TodoInput'
import Todo from './components/Todo'

class App extends React.Component {
  state = {
    todos: []
  }

  nextTodoId = 0

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

  deleteTodo = todo => {
    const localTodos = this.state.todos
    const filteredTodos = localTodos.filter(t => t.id !== todo.id)
    this.setState({
      todos: filteredTodos
    })
  }

  toggleTodo = todo => {
    const localTodos = this.state.todos
    todo.complete = !todo.complete
    this.setState({
      todos: localTodos
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
      <ul>
        <div>{this.state.todos.map((todo) => {
          if (!todo.complete) {
          return <Todo key={todo.id} todo={todo} deleteTodo={this.deleteTodo} toggleTodo={this.toggleTodo} />
          }
        })}
        </div>
        <div>{this.state.todos.map((todo) => {
          if (todo.complete) {
          return <Todo key={todo.id} todo={todo} deleteTodo={this.deleteTodo} toggleTodo={this.toggleTodo} />
          }
        })}
        </div>
      </ul>
    </div>
    )
  }
}

export default App
