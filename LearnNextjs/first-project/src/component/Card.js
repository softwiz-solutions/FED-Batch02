import React from "react";
import MyButton from "./MyButton";

const Card = ({ btnText = "helo 1", title, paragraph, src }) => {
  return (
    <div className="card">
      <MyButton title={btnText} />
      <img src={src} height="500px" width="500px" />
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default Card;
