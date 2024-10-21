import { configureStore } from '@reduxjs/toolkit'
import reduxReducer from './Slice'

const Store = configureStore({
    reducer : {
        count : reduxReducer
    }
})

export default Store