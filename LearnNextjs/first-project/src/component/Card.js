import React from "react";

const Card = ({ btnText, title, paragraph }) => {
  return (
    <div className="card">
      <button>{btnText}</button>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default Card;
