import { combineReducers, createStore } from 'redux';
import todoReducer from './ducks/todo';

const reducer = combineReducers({
  todoState: todoReducer
});

const store = createStore(reducer);

export default store;
export type RootState = ReturnType<typeof reducer>;
