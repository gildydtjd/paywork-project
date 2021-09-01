import React, { useState } from 'react';
import store from 'store';
import { addTodo } from 'store/ducks/todo';
import styled from 'styled-components';

const InputDiv = styled.div`
  display: flex;
  padding: 30px;
  justify-content: center;
  align-items: center;
  background-image: url('/assets/img/sky.jpg');
  background-position: center;
`;
function TodoInput() {
  const [input, setInput] = useState<string>('');
  const [count, setCount] = useState<number>(1);
  function handleInput(e: React.FormEvent<HTMLInputElement>): void {
    setInput(e.currentTarget.value);
  }

  function handleAddTodo() {
    setCount(count + 1);
    console.log(count);
    const newTodo = input;
    store.dispatch(addTodo(newTodo, count));
    setInput('');
  }
  return (
    <InputDiv>
      <input
        type="text"
        placeholder="Task를 작성해주세요!"
        onChange={handleInput}
        value={input}
      ></input>
      <button onClick={handleAddTodo} style={{ marginLeft: '5px' }}>
        등록
      </button>
    </InputDiv>
  );
}

export default TodoInput;
