import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { Itodo, removeTodo, toggleTodo } from 'store/ducks/todo';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoContainerDiv = styled.div`
  height: 100vh;
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

  return <TodoContainerDiv>{todoRender}</TodoContainerDiv>;
}

export default TodoContainer;

// {todoData.map((todo) => {
//   <TodoItem
//     todoItem={todo}
//     removeTodo={() => removeTodo(todo.id)}
//     toggleTodo={() => toggleTodo(todo.id)}
//   />;
// })}
