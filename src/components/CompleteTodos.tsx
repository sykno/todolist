import React, { FC } from "react";
import { incompleteTodo } from "../state/todo/todoActions";
import { deleteTodo } from "../state/todo/todoActions";
import { useDispatch } from "react-redux";

type Props = {
  todoName: string;
};

export const CompleteTodos: FC<Props> = ({ todoName }) => {
  const dispatch = useDispatch();
  const Incomplete = (todoName: string) => {
    dispatch(incompleteTodo(todoName));
  };
  const Delete = (todoName: string) => {
    dispatch(deleteTodo(todoName));
  };
  return (
    <>
      <li className="task__list--item">
        <div className="task__list--item-text">{todoName}</div>
        <div className="btn__area">
          <button onClick={() => Incomplete(todoName)}>戻す</button>
          <button onClick={() => Delete(todoName)}>削除</button>
        </div>
      </li>
    </>
  );
};
