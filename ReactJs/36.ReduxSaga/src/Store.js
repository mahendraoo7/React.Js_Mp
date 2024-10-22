import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './Reducer/Reducer';
import rootSaga from './saga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store with the saga middleware
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
