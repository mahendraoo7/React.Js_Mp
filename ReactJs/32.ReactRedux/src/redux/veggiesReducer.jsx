import React from 'react'
import { BuyVeggies } from './Constant'

const initialVeggiesState = {
    NumOfVeggies:10
}

const VeggiesReducer = (state = initialVeggiesState , action) => {
    switch(action.type){
        case BuyVeggies:return{
            ...state,
            NumOfVeggies:state.NumOfVeggies - 1
        }
        default: return state
    }
}

export default VeggiesReducer
