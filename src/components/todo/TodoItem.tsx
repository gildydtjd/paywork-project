import { Itodo } from 'store/ducks/todo';
import styled from 'styled-components';

const TodoItemDiv = styled.div`
  padding: 20px 5px;
  border: 1px solid #c9c9c9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  width: 50%;
  margin: 30px 25%;
`;

const Check = styled.div`
  background-image: url('/assets/img/check.svg');
  background-position: center;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Garbage = styled.div`
  background-image: url('/assets/img/garbage.svg');
  background-position: center;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const ConetentsDiv = styled.div`
  margin: 0px 20px;
`;

type propsData = {
  todoItem: Itodo;
  removeTodo(): void;
  toggleTodo(): void;
};

function TodoItem({ todoItem, removeTodo, toggleTodo }: propsData) {
  return (
    <TodoItemDiv>
      <ConetentsDiv>
        {todoItem.isToggle ? (
          <Check onClick={toggleTodo} />
        ) : (
          <Check onClick={toggleTodo} style={{ opacity: '0.1' }} />
        )}
      </ConetentsDiv>
      <ConetentsDiv>
        <h2>{todoItem.todo}</h2>
      </ConetentsDiv>
      <ConetentsDiv>
        <Garbage onClick={removeTodo} />
      </ConetentsDiv>
    </TodoItemDiv>
  );
}

export default TodoItem;
