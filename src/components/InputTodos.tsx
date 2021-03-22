import { connect } from "react-redux";
import { addTodo } from "../actions";

type Props = {
  dispatch?: any;
};

let InputTodos: React.FC<Props> = ({ dispatch }) => {
  let input: any;

  return (
    <>
      <div className="input__area">
        <input
          ref={(node) => {
            input = node;
          }}
          placeholder="TODOを入力してください"
        />
        <button
          onClick={() => {
            dispatch(addTodo(input.value));
            input.value = "";
          }}
        >
          登録
        </button>
      </div>
    </>
  );
};

InputTodos = connect()(InputTodos);

export default InputTodos;
