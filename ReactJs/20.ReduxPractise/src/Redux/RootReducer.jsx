import CartReducer from "./ReduxCart/CartReducer";
import ProductReducer from "./ReduxProduct/ProductReducer";
import WhishlistReducer from "./ReduxWhishList/WhishlistReducer";

import { combineReducers } from "redux";

const rootReducer =  combineReducers({
    cart:CartReducer,
    whishlist:WhishlistReducer,
    product:ProductReducer
})

export default rootReducer 