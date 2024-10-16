
const { createStore, applyMiddleware } = require('redux');

const initialState = { count: 10 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'buyCake':
      return { ...state, count: state.count - 1 };
    case 'addCake':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

const logger = store => next => action => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};

const store = createStore(counterReducer, applyMiddleware(logger));

const simulateUserInput = (action) => {
  store.dispatch(action);
};

console.log('Initial State:', store.getState());

simulateUserInput({ type: 'buyCake' });
simulateUserInput({ type: 'addCake' });

console.log('Final State:', store.getState());
