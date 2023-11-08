import {
  ADD_PRODUCTS,
  INCREMENT_COUNT_POSTS,
  INCREMENT_COUNT_SINGLE_POST,
  DECREMENT_COUNT_POSTS,
  DECREMENT_COUNT_SINGLE_POST,
} from "./actions";
import { initialState } from "../data/reduxData";

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      const updatedPayload = { fileData: action.payload, count: 0 };
      return { ...state, products: [...state.products, updatedPayload] };
    default:
      return state;
  }
};
