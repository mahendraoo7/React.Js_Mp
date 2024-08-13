import React from 'react'
import {PRODUCT_ADD,PRODUCT_UPDATE,PRODUCT_DELETE,PRODUCT_ADD_SHOP, ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART, ADD_TO_WISHLIST,REMOVE_TO_WISHLIST,EMPTY_WISHLIST,WISHLIST_TO_CART, CART_TO_WISHLIST, DECREMENT,  INCREMENT,  } from "./Constant";

const initialState = {
    numOfCake:12,
    numOfChoco: 20,
    cart: [],
    wishlist: [],
   
}

const Reducer = (state = initialState , action) => {
    switch(action.type){
        case PRODUCT_ADD : return {
            ...state,
            numOfCake:state.numOfCake - 1
        }
        case PRODUCT_UPDATE : return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case PRODUCT_DELETE : return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case PRODUCT_ADD_SHOP : return {
            ...state,
            numOfChoco:state.numOfChoco + 1
        }
        case ADD_TO_CART :
      return {
        ...state,
        numOfChoco: state.numOfChoco - 1,
      }
      case ADD_TO_CART:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }                 
        case REMOVE_TO_CART: return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case EMPTY_CART : return {
            ...state,
            cart: []
        }
        case ADD_TO_WISHLIST : return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case REMOVE_TO_WISHLIST : return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case EMPTY_WISHLIST : return {
            ...state,
            wishlist: []
        }
        case WISHLIST_TO_CART : return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case CART_TO_WISHLIST : return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case INCREMENT : return {
            ...state,
            numOfChoco:state.numOfChoco + 1
        }
        case DECREMENT : return {
            ...state,
            numOfCake: state.numOfCake > 0 ? state.numOfCake - 1 : 0
        }
        default:return state
    }
}

export default Reducer