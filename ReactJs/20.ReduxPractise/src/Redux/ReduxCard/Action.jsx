import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART,CART_TO_WISHLIST, INCREMENT, DECREMENT} from "../Constant";

export const add_to_cart = () => {
    return{
        type:ADD_TO_CART
    }
}
export const remove_to_cart = () => {
    return{
        type:REMOVE_TO_CART
    }
}
export const empty_cart = () => {
    return{
        type:EMPTY_CART
    }
}
export const cart_to_whishlist = () => {
    return{
        type:CART_TO_WISHLIST
    }
}
export const increment = () => {
    return{
        type:INCREMENT
    }
}
export const decrement = () => {
    return{
        type:DECREMENT
    }
}