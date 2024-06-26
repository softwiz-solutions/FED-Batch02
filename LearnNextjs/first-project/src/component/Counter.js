"use client";
import React, { useState } from "react";
import MyButton from "./MyButton";

const Counter = () => {
  //   let value = 2;
  const [value, setValue] = useState(0);
  // const [counter,setCounter]=useState(0)
  // const [showHeading, setShowHeading] = useState(false);
  // const handleButton = () => {
  //   setShowHeading(!showHeading);
  //   // console.log("clicked");
  //   // // value++;
  //   // let counter = value;
  //   // setValue(++counter);
  //   // console.log("🚀 ~ handleButton ~ value:", value);
  // };
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };
  const reset = () => {
    setValue(0);
  };
  return (
    <div>
      <p className="text-3xl">value: {value}</p>
      {/* {showHeading && <h1>heading</h1>} */}
      <MyButton title="Increment" handleClick={increment} />
      <MyButton title="Decrement" handleClick={decrement} />
      <MyButton title="Reset" handleClick={reset} />
    </div>
  );
};

export default Counter;
