import React from "react";

function Todo() {
  return (
    <>
      <form>
        <input type="text" placeholder="오늘 할일을 적어보세요!!!" />
      </form>
      <ul className="js-toDoList"></ul>
    </>
  );
}

export default Todo;
