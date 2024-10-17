import React from 'react'
import {BuyFruits} from './Constant'

const initialFruitState = {
    numOfFruits : 10 
}

const fruitsReducer = (state = initialFruitState , action) => {
    switch(action.type) {
        case BuyFruits :
            return  {
                ...state , numOfFruits: state.numOfFruits -1 
            }

            default: return state 
    }     
}

export default fruitsReducer
