import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          placeholder="Title..."
        />
        <button onClick={this.handleAddTodo}>
          Add
        </button>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default TodoInput;
