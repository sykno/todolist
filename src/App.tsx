import "./App.css";
import React from "react";
import { InputTodos } from "./components/InputTodos";
import { TodoList } from "./components/TodoList";

export function App() {
  return (
    <>
      <div className="container">
        <h1>TODOリスト</h1>
        <InputTodos />
        <div className="task__area">
          <TodoList />
        </div>
      </div>
    </>
  );
}
