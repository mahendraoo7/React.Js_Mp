import { createStore } from "redux";
import { CakeReducer } from "./cake/CakeReducer";


const Store = createStore(CakeReducer)

export default Store