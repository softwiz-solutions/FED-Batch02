"use client";
import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // let todoList = todos;
    //
    console.log("todos", todos);
    setTodos([...todos, input]);
    // console.log("todos", todos);
    setInput("");
  };
  console.log("todos", todos);

  console.log("input", input);
  return (
    <div className="d-flex h-100 bg-gray-900">
      <h1 className="text-2xl">My Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="p-3 border border-5 border-red-900"
          type="text"
          name="todo"
          value={input}
          onChange={(event) => {
            console.log("event", event);
            setInput(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todos?.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todo;
