import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, EMPTY_WISHLIST, WISHLIST_TO_CART } from "../Constant";

const WishlistReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return [action.wishdata, ...state];
        
            case REMOVE_FROM_WISHLIST:
                return state.filter(item => item.id !== action.id);
        
        case EMPTY_WISHLIST:
            console.log('emptywhislist' , action);
                 data = []
                return [...data] 
        
        case WISHLIST_TO_CART:

            return state; 
        
        default:
            return state;
    }
};

export default WishlistReducer;
