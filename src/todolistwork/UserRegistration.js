import React, { useState } from "react";

function UserRegistration() {
  // let [Greeting, setGreeting] = useState("누구입니까?");
  let [Name, setName] = useState("asdf");
  const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

  const USER_LS = "currentUser",
    SHOWING_CN = "showing";

  // function saveName(text) {
  //   localStorage.setItem(USER_LS, text);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const currentValue = input.value;
  //   paintGreeting(currentValue);
  //   saveName(currentValue);
  // }

  // function askForName() {
  //   form.classList.add(SHOWING_CN);
  //   form.addEventListener("submit", handleSubmit);
  // }

  function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    setName(`Hello ${text}`);
  }

  function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
      // askForName();
    } else {
      paintGreeting(currentUser);
    }
  }

  function init() {
    loadName();
  }

  init();

  return (
    <>
      <form classNames={("js-form", "form")}>
        <input type="text" placeholder="What is your name?" />
      </form>
      <h4 className="js-greetings">{Name} </h4>
    </>
  );
}

export default UserRegistration;
