import {createStore} from "redux";
import {devToolsEnhancer} from 'redux-devtools-extension';
import reducer from '../reducers/todos';

export default createStore(reducer, devToolsEnhancer());