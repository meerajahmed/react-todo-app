const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state;
    case 'REMOVE_TODO':
      return state;
    case 'UPDATE_TODO':
      return state;
    default:
      return state;
  }
};