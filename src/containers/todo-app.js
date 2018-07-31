import {connect} from 'react-redux';
import TodoApp from '../components/todo-app';
import {addTodo, updateTodo, removeTodo} from '../actions/todos';

const mapStateToProps = (state) => ({
  todos: state
});

const mapDispatchToProps = (dispatch) => (
  {
    handleAdd: (todo) => dispatch(addTodo(todo)),
    handleToggle: (todo) => dispatch(updateTodo(todo)),
    handleDelete: (todo) => dispatch(removeTodo(todo))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);