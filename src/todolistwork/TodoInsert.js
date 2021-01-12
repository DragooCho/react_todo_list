import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { RiBallPenFill } from 'react-icons/ri';
import './scssArea/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  // const todoOJT = { randomId: String(Date.now()), text: value };

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      // localStorage.setItem('memo', JSON.stringify(todoOJT));
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
