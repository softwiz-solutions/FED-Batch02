import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const myFavourtieBooks = ["comp", "bio", "eng", "math", "urdu"];
  return (
    <main>
      <div className="main">
        {/* <h1>hello world</h1> */}
        <h1>my favotir books</h1>
        <ul>
          {myFavourtieBooks.map((item, index) => {
            return <List title={item} key={index} />;
          })}
          {/* <List title="comp" />
          <List title="Bio" />
          <List title="Engli" /> */}
        </ul>
        <Heading />
        <MyButton />
      </div>
      <div className="main">
        {/* <h1>hello world</h1> */}
        <h1>my favotir books</h1>
        <ul>
          <List title="comp" />
          <List title="Bio" />
          <List title="Engli" />
        </ul>
        <Heading title="my custome heading" para="this is my custome para" />
        <MyButton />
      </div>
    </main>
  );
}

const MyButton = () => {
  return <button>hello</button>;
};

const Heading = (props) => {
  // const Heading = ({ title, para }) => {
  console.log("props", props);
  const { para, title } = props;
  return (
    <div>
      {/* <h1>{props.title ? props.title : "My default heading"}</h1>
      <p>{props.para ? props.para : "my default para"}</p> */}
      {/* <h1>{title ? title : "My default heading"}</h1>
      <p>{para ? para : "my default para"}</p> */}
      <h1>hello {title} world</h1>
    </div>
  );
};

const List = (props) => {
  const { title } = props;
  return <li>{title}</li>;
};
