import React from "react";
import IncompleteTodos from "./IncompleteTodos";

type Props = {
  todos: string[] | number[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="task__area--item incomplete__area">
      <div className="task__area--itemInner">
        <h3>TODO</h3>
        <ul className="task__list">
          {todos.map((todo: any) => (
            <IncompleteTodos {...todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
