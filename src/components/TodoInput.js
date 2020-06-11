import React from 'react';
import '../styles/TodoInput.css'

class TodoInput extends React.Component {
  state = { input: "" };

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.createTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input className="title-input"
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          placeholder="Title..."
        />
        <button className="add-btn" onClick={this.handleAddTodo}>
          Add
        </button>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default TodoInput;
