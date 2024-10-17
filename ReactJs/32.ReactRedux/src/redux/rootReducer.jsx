import React from 'react'
import FruitsReducer from './fruitsReducer'
import VeggiesReducer from './veggiesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    Fruits:FruitsReducer,
    Veggies:VeggiesReducer
})


export default rootReducer