import { combineReducers } from "redux";
import {
  ADD_TODO,
  COMPLETED_TODO,
  INCOMPLETE_TODO,
  DELETE_TODO,
} from "./todoActions";

export const todos = (state = [], action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          todoName: action.todoName,
          completed: action.completed,
        },
      ];
    case COMPLETED_TODO:
      return state.map((todo: any) =>
        todo.todoName === action.todoName ? { ...todo, completed: true } : todo
      );
    case INCOMPLETE_TODO:
      return state.map((todo: any) =>
        todo.todoName === action.todoName ? { ...todo, completed: false } : todo
      );
    case DELETE_TODO:
      return state.filter((todo: any) => todo.todoName !== action.todoName);

    default:
      return state;
  }
};

export const todoReducer = combineReducers({ todos });
