import React, {Component} from 'react';
import Header from "./header";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";
import Footer from "./footer";

class TodoApp extends Component {

  state = {
    todos: []
  };

  title = "todos";

  render() {
    return (
      <div>
        <Header title={this.title} />
        <AddTodo handleAdd={this.handleAdd} />
        <TodoList
          todos={this.state.todos}
          handleDelete={this.handleDelete}
          handleToggle={this.handleToggle} />
        {
          this.state.todos.length > 0 && <Footer
            itemsLeft={this.state.todos.filter((todo) => !todo.completed).length} />
        }
      </div>
    );
  }

  handleAdd = (todo) => {
    this.setState((prevState) => ({todos: [...prevState.todos, todo]}));
  };

  handleToggle = (toggleTodo) => {
    toggleTodo.completed = !toggleTodo.completed;
    this.setState((prevState) =>
      ({ todos: prevState.todos.map((todo) => (todo.id === toggleTodo.id) ? toggleTodo : todo)}))
  };

  handleDelete = (deleteTodo) => {
    this.setState((prevState) =>
      ({todos: prevState.todos.filter((todo) => todo.id !== deleteTodo.id)}));
  };

}

export default TodoApp;
