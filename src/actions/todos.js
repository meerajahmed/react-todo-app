import ACTIONS from './index';

export const addTodo = (todo) => ({
  type: ACTIONS.ADD_TODO,
  todo
});

export const removeTodo = ({id} = {}) => ({
  type: ACTIONS.REMOVE_TODO,
  id
});

export const updateTodo = (todo) => ({
  type: ACTIONS.UPDATE_TODO,
  todo
});