import React, {Component} from 'react';
import uuid from "uuid";

class AddTodo extends Component {

  state = {
    input: ''
  };

  handleAdd = (event) => {
    event.preventDefault();
    if (this.state.input) {
      const todo = {
        id: uuid(),
        title: this.state.input,
        completed: false
      };
      this.props.handleAdd(todo);
      this.setState(() => ({ input: ''}));
    }
  };

  handleInput = (event) => {
    const input = event.target.value;
    this.setState(() => ({ input }));
  };

  render() {
    return (
      <form onSubmit={this.handleAdd} >
        <input type="text" name="todo"
               placeholder="What needs to be done?"
               onChange={this.handleInput}
               value={this.state.input} />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default AddTodo;
