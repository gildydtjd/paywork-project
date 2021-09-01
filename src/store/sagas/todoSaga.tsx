import axios from 'axios';
import { all, delay } from 'redux-saga/effects';
// import { all, fork, put, call, takeLatest, delay } from 'redux-saga/effects';

function* todoDataSaga() {
  try {
    const result = axios.get('/https://jsonplaceholder.typicode.com/todos');
    yield delay(2000);
    yield console.log(result);
    yield console.log('받은 result값을 저장한다.');
  } catch (error) {
    yield console.log('저장이 실패하였습니다.');
  }
}

function* todoSaga() {
  yield all([todoDataSaga]);
}

export default todoSaga;
