import React, { useState } from "react";
import style from "./todo.module.css";
import TodoItem from "./todoItem";

const todo = () => {
  let [newTodo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <input
        placeholder="Write Something"
        value={newTodo}
        type="text"
        onChange={handleChange}
      />
      <button
        onClick={() => {
          setTodos([...todos, newTodo]);
          setTodo("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default todo;
