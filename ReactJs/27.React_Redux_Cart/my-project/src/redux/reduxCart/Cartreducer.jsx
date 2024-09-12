import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART, CART_TO_WISHLIST, INCREMENT, DECREMENT } from "../Constant";

const CartReducer = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...data];

        case REMOVE_TO_CART:
            return data.filter(item => item.id !== action.id);

            case EMPTY_CART:
                console.log('emptycart' , action);
                data = []
                return [...data]

        case CART_TO_WISHLIST:
            return data;

        case INCREMENT:
            return data;

        case DECREMENT:
            return data;

        default:
            return data;
    }
};

export default CartReducer;
