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
                state.Device = Math.max(0, state.Device -=1);
            },
            RESET :(state) => {
                state.Device = 0;
            },
            ADD5 : (state) => {
                state.Device +=5 
            }
        } 
    }
)


export const {Increment, Decrement, RESET , ADD5} = reduxSlice.actions

export default reduxSlice.reducer