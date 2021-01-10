import React from "react";
import { RiCalendarTodoFill } from "react-icons/ri";

function Todo() {
  return (
    <>
      <form>
        <RiCalendarTodoFill
          style={{ fontSize: "50", marginBottom: "-15", marginRight: "10" }}
        />
        <input type="text" placeholder="오늘 할일을 적어보세요!!!" />
      </form>
      <ul className="js-toDoList"></ul>
    </>
  );
}

export default Todo;
