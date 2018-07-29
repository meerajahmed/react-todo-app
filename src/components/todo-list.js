import React from 'react';
import Todo from './todo';

const TodoList = (props) => {
  return (
    <div>
      {
        props.todos.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo}
              handleDelete={props.handleDelete}
              handleToggle={props.handleToggle}
            />
          );
        })
      }
    </div>
  );
};

export default TodoList;
