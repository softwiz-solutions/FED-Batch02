"use client";
import React, { useState } from "react";
import MyButton from "./MyButton";

const Counter = () => {
  //   let value = 2;
  const [value, setValue] = useState(1);
  const [showHeading, setShowHeading] = useState(false);
  const handleButton = () => {
    setShowHeading(!showHeading);
    // console.log("clicked");
    // // value++;
    // let counter = value;
    // setValue(++counter);
    // console.log("🚀 ~ handleButton ~ value:", value);
  };
  return (
    <div>
      <p className="description">value: {value}</p>
      {showHeading && <h1>heading</h1>}
      <MyButton title="count" handleClick={handleButton} />
    </div>
  );
};

export default Counter;
