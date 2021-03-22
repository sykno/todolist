import { ADD_TODO } from "../actions/index";

const events = (state = [], action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text }];
    default:
      return state;
  }
};

export default events;
