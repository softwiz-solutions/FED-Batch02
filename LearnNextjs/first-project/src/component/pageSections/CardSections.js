import React from "react";
import Card from "../Card";

const CardSections = () => {
  const cardData = [
    {
      id: 1,
      btnText: "my button",
      //   title: "Zero Configuration",
      src: "/assests/icon.png",
      paragraph:
        "Automatically creates a usable computer network based on the Internet Protocol Suite when computers or network peripherals are interconnected.",
    },
    {
      id: 2,
      title: "Code Security ",
      src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",

      paragraph:
        "Code Security Security as Code is the methodology of codifying security and policy decisions and socializing them with other teams.",
    },
    {
      id: 3,
      title: "Access Controlled ",
      src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",

      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
    {
      id: 4,
      title: "Access Controlled ",
      src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",

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
      src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",

      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
    {
      id: 4,
      title: "Access Controlled ",
      src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",

      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
    {
      id: 4,
      title: "Access Controlled ",
      src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",

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
      src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",

      src: "hlelfjdsjfl",
      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
    {
      id: 4,
      title: "Access Controlled ",
      src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",

      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",

      title: "Access Controlled ",
      paragraph:
        "Identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans, and security tokens.",
    },
  ];
  return (
    <div>
      <div className="mainCard">
        {cardData.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              paragraph={item.paragraph}
              src={item.src}
              //   btnText="Click me"
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
    </div>
  );
};

export default CardSections;
