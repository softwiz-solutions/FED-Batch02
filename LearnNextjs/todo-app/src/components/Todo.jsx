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

  const handleDeleteTodo = (deleteIndex) => {
    // 3,
    let updateTodo = todos.filter((item, index) => index != deleteIndex);
    console.log("🚀 ~ handleDeleteTodo ~ updateTodo:", updateTodo);
    setTodos(updateTodo);
  };
  console.log("todos", todos);

  console.log("input", input);
  return (
    <div className="min-h-screen w-100 bg-red-900 flex justify-center items-center">
      <div className="">
        <h1 className="text-4xl text-center text-yellow-600 font-extrabold ">
          My Todos
        </h1>
        <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
          <input
            className="p-3 border border-5 border-red-900 rounded-3xl"
            type="text"
            name="todo"
            value={input}
            onChange={(event) => {
              console.log("event", event);
              setInput(event.target.value);
            }}
          />
          <button
            type="submit "
            className="bg-slate-300 text-3xl rounded-3xl p-3"
          >
            Submit
          </button>
        </form>
        <ul className="">
          {todos?.map((item, index) => {
            return (
              <li key={index} className="list-disc text-2xl mt-4">
                {index} {item}
                <button
                  className="ml-3 bg-orange-500 rounded-3xl p-3"
                  onClick={() => {
                    handleDeleteTodo(index);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
