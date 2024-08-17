import rootReducer from "./RootReducer";
import { createStore } from "redux";

const Store = createStore(rootReducer)

export default Store