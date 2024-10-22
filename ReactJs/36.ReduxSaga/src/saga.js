import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataSuccess, fetchDataFailure } from './Reducer/Action';

// Worker saga: fetch data from API
function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:3000/products');
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

// Watcher saga: watch for the FETCH_DATA_REQUEST action
function* watchFetchDataSaga() {
  yield takeEvery('FETCH_DATA_REQUEST', fetchDataSaga);
}

export default function* rootSaga() {
  yield watchFetchDataSaga();
}
