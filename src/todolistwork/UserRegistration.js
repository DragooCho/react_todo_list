import React from 'react';
import { FaUser } from 'react-icons/fa';

function UserRegistration() {
  //   // let [Greeting, setGreeting] = useState("누구입니까?");
  //   const [Name, setName] = useState();
  //   // const form = document.querySelector(".js-form"),
  //   //   input = form.querySelector("input"),
  //   // greeting = document.querySelector(".js-greetings");

  //   const USER_LS = "currentUser",
  //   //   SHOWING_CN = "showing";

  //   // function saveName(text) {
  //   //   localStorage.setItem(USER_LS, text);
  //   // }

  //   // function handleSubmit(event) {
  //   //   event.preventDefault();
  //   //   const currentValue = input.value;
  //   //   paintGreeting(currentValue);
  //   //   saveName(currentValue);
  //   // }

  //   // function askForName() {
  //   //   form.classList.add(SHOWING_CN);
  //   //   form.addEventListener("submit", handleSubmit);
  //   // }

  //   function paintGreeting(text) {
  //     // form.classList.remove(SHOWING_CN);
  //     // greeting.classList.add(SHOWING_CN);
  //     setName(text);
  //   };

  //   function loadName() {
  //     const currentUser = localStorage.getItem(USER_LS);
  //     if (currentUser === null) {
  //       // askForName();
  //     } else {
  //       paintGreeting(currentUser);
  //     }
  //   }

  //   function init() {
  //     loadName();
  //   }

  //   init();

  return (
    <>
      <form style={{ marginBottom: '-50px', marginTop: '-30px' }}>
        <FaUser
          style={{ fontSize: '50', marginBottom: '-15', marginRight: '10' }}
        />
        <input type="text" placeholder="What is your name?" />
      </form>
      {/* <h4>{Name}</h4> */}
    </>
  );
}

export default UserRegistration;