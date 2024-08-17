import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST, EMPTY_WISHLIST, WISHLIST_TO_CART } from "../Constant";


export const add_to_whishlist = () => {
    return{
        type:ADD_TO_WISHLIST
    }
}
export const remove_to_whishlist = () => {
    return{
        type:REMOVE_TO_WISHLIST
    }
}
export const empty_whishlist = () => {
    return{
        type:EMPTY_WISHLIST
    }
}
export const whishlist_to_cart = () => {
    return{
        type:WISHLIST_TO_CART
    }
}