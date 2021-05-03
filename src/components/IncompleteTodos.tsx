import React, { FC } from "react";
import { completeTodo } from "../state/todo/todoActions";
import { deleteTodo } from "../state/todo/todoActions";
import { useDispatch } from "react-redux";

type Props = {
  todoName: string;
};

export const IncompleteTodos: FC<Props> = ({ todoName }) => {
  const dispatch = useDispatch();
  const Complete = (todoName: string) => {
    dispatch(completeTodo(todoName));
  };
  const Delete = (todoName: string) => {
    dispatch(deleteTodo(todoName));
  };

  return (
    <>
      <li className="task__list--item">
        <div className="task__list--item-text">{todoName}</div>
        <div className="btn__area">
          <button onClick={() => Complete(todoName)}>完了</button>
          <button onClick={() => Delete(todoName)}>削除</button>
        </div>
      </li>
    </>
  );
};
