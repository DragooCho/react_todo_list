import React from 'react';

const testTodo = () => {
  //   const [value, setValue] = useState('');

  //   const toDoForm = document.querySelector('.js-toDoForm'),
  //     toDoInput = toDoForm.querySelector('input');
  // toDoList = document.querySelector('.js-toDoList');

  //   const TODOS_LS = 'toDos';

  //   function paintToDo(text) {
  //     console.log(text);
  // const li = document.createElement('li');
  // const delBtn = document.createElement('button');
  // delBtn.innerText = '❌';
  // const span = document.createElement('span');
  // span.innerText = text;
  // li.appendChild(delBtn);
  // li.appendChild(span);
  // toDoList.appendChild(li);
  //   }

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     paintToDo(value);
  //     setValue('');
  //   };

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     const currentValue = toDoInput.value;
  //     paintToDo(currentValue);
  //     toDoInput.value = '';
  //   }

  //   function loadToDos() {
  //     const toDos = localStorage.getItem(TODOS_LS);
  //     if (toDos !== null) {
  //     }
  //   }

  //   function init() {
  //     loadToDos();
  //     handleSubmit();
  //   }

  //   init();

  return (
    <>
      <form className="js-toDoForm">
        <input type="text" placeholder="Write a to do" />
      </form>
      <ul className="js-toDoList"></ul>
    </>
  );
};

export default testTodo;
