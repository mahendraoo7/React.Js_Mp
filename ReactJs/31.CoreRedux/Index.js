import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Actions
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Reducer
const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create Store
const store = createStore(counterReducer);

// Counter Component
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

 
};


