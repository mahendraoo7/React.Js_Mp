import { createStore } from "redux"
import rootReducer from "./rootReducer"

const Store = createStore(rootReducer)

export default Store