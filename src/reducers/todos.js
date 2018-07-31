import ACTIONS from '../actions';

const defaultTodoState = [];

export default (state = defaultTodoState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.todo];

    case ACTIONS.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    case ACTIONS.UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.todo.id) {
          return {
            ...todo,
            ...action.todo
          }
        }
        return todo;
      });

    default:
      return state;
  }
};