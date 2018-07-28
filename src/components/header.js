import React, {Component} from 'react';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default TodoApp;
