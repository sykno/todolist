// このファイルは作成中です。

const CompleteTodos = () => {
  return (
    <>
      <div className="task__area--item complete__area">
        <div className="task__area--itemInner">
          <h3>完了済み</h3>
          <ul className="task__list">
            <li className="task__list--item">
              <div className="task__list--itemText">タスク1</div>
              <div className="btn__area">
                <button>戻す</button>
                <button>削除</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CompleteTodos;
