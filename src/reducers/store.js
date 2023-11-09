import { legacy_createStore as createStore, combineReducers } from "redux";
import { cartReducer, productReducer, propertiesReducer } from "./reducers";

const rootReducer = combineReducers({
  products: productReducer,
  properties: propertiesReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
