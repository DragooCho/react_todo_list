import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { RiBallPenFill } from 'react-icons/ri';
import './scssArea/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  // const PENDING = 'PENDING';

  // const todoOJT = { randomId: String(Date.now()), text: value };

  function getTodoObject(text) {
    return {
      id: String(Date.now()),
      text,
    };
  }

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      let memo;
      onInsert(value);
      const taskObj = getTodoObject(value);
      memo(taskObj);
      // localStorage.setItem(PENDING, JSON.stringify(memo));
      setValue('');

      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <RiBallPenFill style={{ fontSize: '40', margin: '5' }} />
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
