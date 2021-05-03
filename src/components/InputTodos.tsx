import React, { useCallback, useState, FC } from "react";
import { addTodo } from "../state/todo/todoActions";
import { useDispatch } from "react-redux";

export const InputTodos: FC = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const inputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const registration = useCallback(() => {
    if (newTodo === "") return;
    dispatch(addTodo(newTodo));
    setNewTodo("");
  }, [dispatch, newTodo]);

  return (
    <>
      <div className="input__area">
        <input
          value={newTodo}
          placeholder="TODOを入力してください"
          onChange={inputText}
        />
        <button onClick={registration}>登録</button>
      </div>
    </>
  );
};
