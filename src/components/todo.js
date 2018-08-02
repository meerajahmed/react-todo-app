import React, {Component} from "react";

export default class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      completed: props.todo.completed
    };
  }

  handleToggle = (completed) => {
    const todo = {
      ...this.props.todo,
      completed
    };
    this.props.handleToggle(todo);
    this.setState(() => ({completed}));
  };

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.state.completed}
               onClick={(event) => this.handleToggle(event.target.checked)}/>
        <span>{this.props.todo.title}</span>
        <button onClick={() => this.props.handleDelete(this.props.todo)}> remove</button>
      </div>
    );
  }

}