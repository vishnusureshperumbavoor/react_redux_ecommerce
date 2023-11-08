import {
  ADD_PRODUCT,
  INCREMENT_COUNT_PRODUCTS,
  INCREMENT_COUNT_SINGLE_PRODUCTS,
  DECREMENT_COUNT_PRODUCTS,
  DECREMENT_COUNT_SINGLE_PRODUCTS,
} from "./actions";
import { initialState } from "../data/reduxData";

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const updatedPayload = { fileData: action.payload, count: 0 };
      return { ...state, products: [...state.products, updatedPayload] };
    case INCREMENT_COUNT_PRODUCTS:
      const updatedProducts = state.products.map((product) => ({
        ...product,
        count: product.count + 1,
      }));
      return { ...state, products: updatedProducts };
    default:
      return state;
  }
};
