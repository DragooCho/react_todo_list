import React, { useCallback, useRef, useState } from 'react';
import './App.css';
import Clock from './todolistwork/TimeClock';
import Weather from './todolistwork/Weather';
import TodoTemplate from './todolistwork/TodoTemplate';
import TodoInsert from './todolistwork/TodoInsert';
import TodoList from './todolistwork/TodoList';
// import TestTodo from './todolistwork/testTodo';

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: '리액트의 기초 알아보기',
      id: 1,
      checked: true,
    },
    {
      text: '컴포넌트 스타일링해 보기',
      id: 2,
      checked: true,
    },
    {
      text: '일정 관리 앱 만들어 보기',
      id: 3,
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  // const TODOS_LS = 'testToDos';
  // const toDos = [];

  // function saveToDos() {
  //   localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  // }

  // const paintToDo = useCallback(
  //   (text) => {
  //     const todo = {
  //       text,
  //       id: nextId.current,
  //       checked: false,
  //     };
  //     setTodos(todos.concat(todo));
  //     nextId.current += 1;
  //   },
  //   [todos],
  // );

  // function loadToDos() {
  //   const toDos = localStorage.getItem(TODOS_LS);
  //   if (toDos !== null) {
  //     const loadedToDos = localStorage.getItem(TODOS_LS);
  //     if (loadedToDos !== null) {
  //       const parsedToDos = JSON.parse(loadedToDos);
  //       parsedToDos.forEach(function (toDo) {
  //         paintToDo(toDo.text);
  //       });
  //     }
  //   }
  // }

  const onInsert = useCallback(
    (text) => {
      const todo = {
        text,
        id: nextId.current,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
      // toDos.push(todo);
      // localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
      // loadToDos();
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
