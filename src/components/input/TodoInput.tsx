import React, { useState } from 'react';
import store from 'store';
import { addTodo } from 'store/ducks/todo';

function TodoInput() {
  const [input, setInput] = useState<string>('');
  const [count, setCount] = useState<number>(1);
  function handleInput(e: React.FormEvent<HTMLInputElement>): void {
    setInput(e.currentTarget.value);
  }

  async function handleAddTodo() {
    await setCount(count + 1);
    console.log(count);
    const newTodo = input;
    store.dispatch(addTodo(newTodo, count));
    setInput('');
  }
  return (
    <div>
      <input
        type="text"
        placeholder="투두리스트"
        onChange={handleInput}
        value={input}
      ></input>
      <button onClick={handleAddTodo}>저장</button>
    </div>
  );
}

export default TodoInput;
