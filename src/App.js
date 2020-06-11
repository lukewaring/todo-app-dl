import React from 'react'
import './styles/App.css'
import TodoInput from './components/TodoInput'
import Todo from './components/Todo'

class App extends React.Component {
  state = {
    todos: [],
    filter: 'All'
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

  setFilter = statusStr => {
    this.setState({
      filter: statusStr
    })
  }

  sortTodosAsc = () => {
    let sortedTodos = this.state.todos.sort((a, b) => a.id - b.id)
    this.setState({
      todos: sortedTodos
    })
  }

  sortTodosDsc = () => {
    let sortedTodos = this.state.todos.sort((a, b) => b.id - a.id)
    this.setState({
      todos: sortedTodos
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
        {this.state.filter === "All" || this.state.filter === "Active" ?
          (<div>{this.state.todos.filter(todo => !todo.complete).map((todo) => {
            return <Todo key={todo.id} todo={todo} deleteTodo={this.deleteTodo} toggleTodo={this.toggleTodo} />
          })}
          </div>) :
          null
        }
        {this.state.filter === "All" || this.state.filter === "Completed" ?
          (<div>{this.state.todos.filter(todo => todo.complete).map((todo) => {
            return <Todo key={todo.id} todo={todo} deleteTodo={this.deleteTodo} toggleTodo={this.toggleTodo} />
          })}
          </div>) :
          null
        }
      </ul>
      <div>
        <button onClick={() => this.setFilter("All")}>All</button>
        <button onClick={() => this.setFilter("Active")}>Active</button>
        <button onClick={() => this.setFilter("Completed")}>Completed</button>
        <button onClick={this.sortTodosAsc}>Sort (Ascending)</button>
        <button onClick={this.sortTodosDsc}>Sort (Descending)</button>
      </div>
    </div>
    )
  }
}

export default App
