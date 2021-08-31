import React, { useState } from 'react';
import store from 'store';
import { addTodo } from 'store/ducks/todo';
import styled from 'styled-components';

const InputDiv = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: #c9c9c9;
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
        placeholder="리스트를 작성해주세요!"
        onChange={handleInput}
        value={input}
      ></input>
      <button onClick={handleAddTodo}>저장</button>
    </InputDiv>
  );
}

export default TodoInput;
