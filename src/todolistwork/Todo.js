import React from 'react';
// import { RiCalendarTodoFill } from "react-icons/ri";

function Todo({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default Todo;
