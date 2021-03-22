export const ADD_TODO = "ADD_TODO";

let nextTodoId: number = 0;

export const addTodo = (text: string) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text: text,
  };
};
