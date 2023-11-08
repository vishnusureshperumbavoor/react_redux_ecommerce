import { legacy_createStore as createStore, combineReducers } from "redux";
import { productReducer, productPropertiesReducer } from "./reducers";

const rootReducer = combineReducers({
  products: productReducer,
  productProperties: productPropertiesReducer,
});

const store = createStore(rootReducer);

export default store;
