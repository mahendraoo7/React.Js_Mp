import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST, EMPTY_WISHLIST, WISHLIST_TO_CART } from "../Constant";

const WhishlistReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_WISHLIST: return{
            ...state,
            numOfProduct:state.numOfProduct - 1
        }
        case REMOVE_TO_WISHLIST: return{
            ...state,
            numOfProduct:state.numOfProduct - 1
        }
        case EMPTY_WISHLIST: return{
            ...state,
            numOfProduct:state.numOfProduct - 1
        }
        case WISHLIST_TO_CART: return{
            ...state,
            numOfProduct:state.numOfProduct - 1
        }
        default:return state
    }
}

export default WhishlistReducer