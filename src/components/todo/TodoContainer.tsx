import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { Itodo, removeTodo, toggleTodo } from 'store/ducks/todo';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoContainerDiv = styled.div`
  height: 100vh;
  background-image: url('/assets/img/sky.jpg');
  background-position: center;
`;

const TaskCountDiv = styled.div`
  text-align: center;
  padding: 20px;
  color: #ffffff;
`;
function TodoContainer() {
  const [todoData, setTodoData] = useState<Itodo[]>([]);
  const TodoList = useSelector((state: RootState) => state.todoState);
  const dispatch = useDispatch();

  useEffect(() => {
    setTodoData(TodoList);
    console.log(TodoList);
  }, [TodoList]);

  const todoRender = todoData.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todoItem={todo}
        removeTodo={() => dispatch(removeTodo(todo.id))}
        toggleTodo={() => dispatch(toggleTodo(todo.id))}
      />
    );
  });

  return (
    <TodoContainerDiv>
      <TaskCountDiv>{todoData.length}개의 Task가 등록되었습니다.</TaskCountDiv>
      {todoRender}
    </TodoContainerDiv>
  );
}

export default TodoContainer;