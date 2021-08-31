import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import store, { RootState } from 'store';
import { Itodo, removeTodo } from 'store/ducks/todo';
import styled from 'styled-components';

const TodoItemDiv = styled.div`
  padding: 5px 5px;
  border: 1px solid #c9c9c9;
  display: flex;
  justify-content: center;
  align-items: center;
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
};

function TodoItem({ todoItem }: propsData) {
  const [data, setData] = useState<Itodo[]>();
  const TodoData = useSelector((state: RootState) => state.todoState);
  useEffect(() => {
    setData(TodoData);
  }, [TodoData]);

  return (
    <TodoItemDiv>
      <ConetentsDiv>
        {todoItem.isToggle ? <Check /> : <Check style={{ opacity: '0.1' }} />}
      </ConetentsDiv>
      <ConetentsDiv>{todoItem.todo}</ConetentsDiv>
      <ConetentsDiv>
        <Garbage />
      </ConetentsDiv>
    </TodoItemDiv>
  );
}

export default TodoItem;
