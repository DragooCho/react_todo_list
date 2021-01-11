import React from 'react';
import { GoChecklist } from 'react-icons/go';
import './scssArea/TodoTemplate.scss';

function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">
        {' '}
        <GoChecklist style={{ fontSize: '40', marginRight: '10' }} />
        일정 관리
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

export default TodoTemplate;
