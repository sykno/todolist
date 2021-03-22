import "./App.css";
import InputTodos from "./components/InputTodos";
import CompleteTodos from "./components/CompleteTodos";
import VisibleTodoList from "./container/VisibleTodoList"

function App() {
  return (
    <>
    <div className="container">
      <h1>TODOリスト</h1>
      <InputTodos />
      <div className="task__area">
        <VisibleTodoList />
        <CompleteTodos />
      </div>
    </div>
    </>
  );
}

export default App;
