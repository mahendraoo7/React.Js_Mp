const redux = require ('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

function buy_cake(){
    return{
        type:BUY_CAKE,
        info:'First redux Action'
    }
}

const initialState = {
    numOfCake:10
}

const reducer = (state = initialState , action) => {
        switch(action.type){
            case BUY_CAKE:return{
                numOfCake:state.numOfCake - 1
            }
            default:return state
        }
}

const store = createStore(reducer)

console.log('InitialState' , store.getState())

const unsubscribe = store.subscribe(() => console.log('Updated State' , store.getState())
)

store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())

unsubscribe()