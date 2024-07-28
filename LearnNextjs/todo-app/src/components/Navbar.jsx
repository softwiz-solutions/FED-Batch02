import React from "react";
import HeadingLarge from "./HeadingLarge";

const Navbar = () => {
  const linkList = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "text",
      link: "/text",
    },
  ];
  return (
    <div>
      <HeadingLarge title="Assignemnt 3" />
      <HeadingLarge title="Navbar" />
      <ul>
        {linkList.map((item, index) => {
          <li>
            <a href={item.link}>{item.tite}</a>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
