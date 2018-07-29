import React from "react";

const Todo = (props) => (
  <div>
    <input type="checkbox" checked={props.todo.completed}
           onClick={(e) => props.handleToggle(props.todo)} />
    <span>{props.todo.title}</span>
    <button onClick={(e) => props.handleDelete(props.todo)}> remove </button>
  </div>
);

export default Todo;