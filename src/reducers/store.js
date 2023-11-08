import { legacy_createStore as createStore } from "redux";
import { productReducer } from "./reducers";

const store = createStore(productReducer);

export default store;
