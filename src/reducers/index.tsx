import {combineReducers} from 'redux';
import todos from './events';

const todoApp = combineReducers({todos});

export default todoApp;