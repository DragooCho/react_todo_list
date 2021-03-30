import React, { useCallback, useRef, useState } from 'react';
import './App.css';
import Clock from './todolistwork/TimeClock';
import Weather from './todolistwork/Weather';
import TodoTemplate from './todolistwork/TodoTemplate';
import TodoInsert from './todolistwork/TodoInsert';
import TodoList from './todolistwork/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: '기록',
      id: 1,
      checked: true,
    },
    {
      text: '영화감상',
      id: 2,
      checked: true,
    },
    {
      text: '저녁밥을 집에서 먹기',
      id: 3,
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        text,
        id: nextId.current,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <div>
      <section className="canterInformation">
        <div className="js-clock">
          <h1>
            <Clock />
          </h1>
        </div>
        <TodoTemplate>
          <TodoInsert onInsert={onInsert} />
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
        <div className="js-weather">
          <Weather />
        </div>
      </section>
    </div>
  );
};

export default App;
