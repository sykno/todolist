type Props = {
  text?: string;
};

const IncompleteTodos: React.FC<Props> = ({ text }) => {
  return (
    <>
    <li className="task__list--item">
      <div className="task__list--itemText">{text}</div>
      <div className="btn__area">
        <button>完了</button>
        <button>削除</button>
      </div>
    </li>
    </>
  );
};

export default IncompleteTodos;
