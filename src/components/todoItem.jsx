import React, { useState } from "react";
import style from "./todo.module.css";
const TodoItem = ({ todo }) => {
  const [isCompleted, setisCompleted] = useState(todo.isCompleted);
  return (
    <div className={style.todo} key={todo.id}>
      <input
        type="radio"
        checked={isCompleted}
        onChange={(e) => {
          setisCompleted(e.target.checked);
        }}
      />
      <div>{todo}</div>
    </div>
  );
};
export default TodoItem;
