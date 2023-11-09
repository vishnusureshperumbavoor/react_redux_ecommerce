import { legacy_createStore as createStore, combineReducers } from "redux";
import { productReducer, propertiesReducer } from "./reducers";

const rootReducer = combineReducers({
  products: productReducer,
  properties: propertiesReducer,
});

const store = createStore(rootReducer);

export default store;
