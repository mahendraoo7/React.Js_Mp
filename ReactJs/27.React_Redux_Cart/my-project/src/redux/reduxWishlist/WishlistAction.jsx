import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, EMPTY_WISHLIST, WISHLIST_TO_CART } from "../Constant";

export function add_wishlist(wishdata) {
    return {
        type: ADD_TO_WISHLIST,
        wishdata
    };
}

export function remove_wishlist(id) {
    return {
        type: REMOVE_FROM_WISHLIST, 
        id 
    };
}
export function empty_wishlist() {
    return {
        type: EMPTY_WISHLIST
    };
}

export function wishlist_to_cart() {
    return {
        type: WISHLIST_TO_CART
    };
}
