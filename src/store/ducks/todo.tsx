export const ADD_TODO = 'todo/add_todo' as const;
export const REMOVE_TODO = 'todo/remove_todo' as const;
export const TOGGLE_TODO = 'todo/toggle_todo' as const;

export const addTodo = (todo: string, count: number) => ({
  type: ADD_TODO,
  todo: {
    todo: todo,
    isToggle: false,
    id: count
  }
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  id: id
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id: id
});

type actionType =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof toggleTodo>;

export type Itodo = {
  id: number;
  todo: string;
  isToggle: boolean;
};

const initialState: Itodo[] = [
  {
    todo: '영어공부',
    isToggle: false,
    id: 0
  }
];

const todoReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case REMOVE_TODO:
      return state.filter((item: Itodo) => item.id !== action.id);
    case TOGGLE_TODO:
      return state.map((item: Itodo) =>
        item.id === action.id ? { ...item, isToggle: !item.isToggle } : item
      );
    default:
      return state;
  }
};

export default todoReducer;
