import React from "react";
import { createSlice } from '@reduxjs/toolkit'


const reduxSlice = createSlice(
    {
        name : 'count',
        initialState : {
            Device : 20
        },
        reducers : {
            Increment : (state) => {
                state.Device += 1 ;
            },
            Decrement : (state) => {
                state.Device -= 1 ;
            }
        } 
    }
)


export const {Increment, Decrement} = reduxSlice.actions

export default reduxSlice.reducer