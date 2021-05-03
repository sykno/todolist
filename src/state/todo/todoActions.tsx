export const ADD_TODO = "ADD_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";
export const INCOMPLETE_TODO = "INCOMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (todoName: string) => {
  return {
    type: ADD_TODO,
    todoName: todoName,
    completed: false,
  };
};

export const completeTodo = (todoName: string) => {
  return {
    type: COMPLETED_TODO,
    todoName: todoName,
  };
};

export const incompleteTodo = (todoName: string) => {
  return {
    type: INCOMPLETE_TODO,
    todoName: todoName,
  };
};

export const deleteTodo = (todoName: string) => {
  return {
    type: DELETE_TODO,
    todoName: todoName,
  };
};
