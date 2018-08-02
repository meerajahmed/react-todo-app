import React from 'react';
import Header from "./header";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";
import Footer from "./footer";

const TodoApp = (props) => {
  return (
    <div>
      <Header title="todos"/>
      <AddTodo handleAdd={props.handleAdd}/>
      <TodoList
        todos={props.todos}
        handleDelete={props.handleDelete}
        handleToggle={props.handleToggle}/>
      {
        props.todos.length > 0 && <Footer
          itemsLeft={props.todos.filter((todo) => !todo.completed).length}/>
      }
    </div>
  );
};

export default TodoApp;