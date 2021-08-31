import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

function TodoItem() {
  const todolist = useSelector((state: RootState) => state.todoState);
  console.log(todolist);
  return <div></div>;
}

export default TodoItem;
