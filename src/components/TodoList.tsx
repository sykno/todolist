import React, { FC } from "react";
import { IncompleteTodos } from "./IncompleteTodos";
import { CompleteTodos } from "./CompleteTodos";
import { useSelector } from "react-redux";

type Props = {
  todos?: any[];
};

export const TodoList: FC<Props> = () => {
  const todos = useSelector((state: Props) => state.todos);

  return (
    <>
      <div className="task__area--item incomplete__area">
        <div className="task__area--item-inner">
          <h3>TODO</h3>
          <ul className="task__list">
            {todos
              ?.filter((todo) => todo.completed === false)
              .map((todo, index) => (
                <IncompleteTodos key={index} {...todo} />
              ))}
          </ul>
        </div>
      </div>
      <div className="task__area--item complete__area">
        <div className="task__area--item-inner">
          <h3>完了済み</h3>
          <ul className="task__list">
            {todos
              ?.filter((todo) => todo.completed === true)
              .map((todo, index) => (
                <CompleteTodos key={index} {...todo} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
