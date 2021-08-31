import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import styled from 'styled-components';
import TodoItem from './TodoItem';
const TodoContainerDiv = styled.div`
  height: 100vh;
  width: 70%;
  margin-left: 15%;
`;

function TodoContainer() {
  const TodoList = useSelector((state: RootState) => state.todoState);
  console.log(TodoList);

  const TodoItemRender = TodoList.map((todo) => {
    return <TodoItem key={todo.id} todoItem={todo}></TodoItem>;
  });

  return <TodoContainerDiv>{TodoItemRender}</TodoContainerDiv>;
}

export default TodoContainer;
