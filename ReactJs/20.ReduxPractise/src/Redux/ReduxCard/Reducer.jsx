import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART,CART_TO_WISHLIST, INCREMENT, DECREMENT} from "../Constant";

const CartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART: return{

        }
        case REMOVE_TO_CART: return{
            
        }
        case EMPTY_CART: return{
            
        }
        case CART_TO_WISHLIST: return{
            
        }
        case INCREMENT: return{
            
        }
        case DECREMENT: return{
            
        }
        default:return state
    }
}

export default CartReducer
