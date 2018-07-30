import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from "./containers/todo-app";
import {Provider} from 'react-redux';
import store from './store';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);