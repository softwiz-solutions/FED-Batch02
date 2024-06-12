import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/component/MyButton";
import Card from "@/component/Card";

export default function Home() {
  // const myFavourtieBooks = ["comp", "bio", "eng", "math", "urdu"];
  const cardData = [
    {
      id: 1,
      title: "Zero Configuration",
      paragraph:
        "Automatically creates a usable computer network based on the Internet Protocol Suite when computers or network peripherals are interconnected.",
    },
    {
      id: 2,
      title: "Code Security ",
      paragraph:
        "Code Security Security as Code is the methodology of codifying security and policy decisions and socializing them with other teams.",
    },
    {
      id: 3,
      title: "Access Controlled ",
      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
    {
      id: 4,
      title: "Access Controlled ",
      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
    {
      id: 4,
      title: "Access Controlled ",
      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
    {
      id: 4,
      title: "Access Controlled ",
      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
    {
      id: 4,
      title: "Access Controlled ",
      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
    {
      id: 4,
      title: "Access Controlled ",
      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
    {
      id: 4,
      title: "Access Controlled ",
      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
    {
      id: 4,
      title: "Access Controlled ",
      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
    {
      id: 4,
      title: "Access Controlled ",
      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
    {
      id: 4,
      title: "Access Controlled ",
      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
  ];
  return (
    <main>
      <div className="mainCard">
        {cardData.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              paragraph={item.paragraph}
              btnText="Click me"
            />
          );
        })}
        {/* <Card
          btnText="click me"
          title="Zero Configuration"
          paragraph="Automatically creates a usable computer network based on the Internet Protocol Suite when computers or network peripherals are interconnected."
        /> */}
        {/* <Card
          btnText="click me"
          title="Zero Configuration"
          paragraph="Automatically creates a usable computer network based on the Internet Protocol Suite when computers or network peripherals are interconnected."
        />
        <Card
          btnText="click me"
          title="Zero Configuration"
          paragraph="Automatically creates a usable computer network based on the Internet Protocol Suite when computers or network peripherals are interconnected."
        /> */}
      </div>
      {/* <MyButton title="my button" />
      <MyButton title="my button 1" />
      <MyButton title="my button 2" />
      <MyButton title="my button 3" /> */}
    </main>
    // <main>
    //   <div className="main">
    //     {/* <h1>hello world</h1> */}
    //     <h1>my favotir books</h1>
    //     <ul>
    //       {myFavourtieBooks.map((item, index) => {
    //         return <List title={item} key={index} />;
    //       })}
    //       {/* <List title="comp" />
    //       <List title="Bio" />
    //       <List title="Engli" /> */}
    //     </ul>
    //     <Heading />
    //     <MyButton />
    //   </div>
    //   <div className="main">
    //     {/* <h1>hello world</h1> */}
    //     <h1>my favotir books</h1>
    //     <ul>
    //       <List title="comp" />
    //       <List title="Bio" />
    //       <List title="Engli" />
    //     </ul>
    //     <Heading title="my custome heading" para="this is my custome para" />
    //     <MyButton />
    //   </div>
    // </main>
  );
}

// const MyButton = () => {
//   return <button>hello</button>;
// };

// const Heading = (props) => {
//   // const Heading = ({ title, para }) => {
//   console.log("props", props);
//   const { para, title } = props;
//   return (
//     <div>
//       {/* <h1>{props.title ? props.title : "My default heading"}</h1>
//       <p>{props.para ? props.para : "my default para"}</p> */}
//       {/* <h1>{title ? title : "My default heading"}</h1>
//       <p>{para ? para : "my default para"}</p> */}
//       <h1>hello {title} world</h1>
//     </div>
//   );
// };

// const List = (props) => {
//   const { title } = props;
//   return <li>{title}</li>;
// };