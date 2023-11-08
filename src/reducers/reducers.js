import {
  ADD_POST,
  INCREMENT_COUNT_POSTS,
  INCREMENT_COUNT_SINGLE_POST,
  DECREMENT_COUNT_POSTS,
  DECREMENT_COUNT_SINGLE_POST,
} from "./actions";
import { initialState } from "../data/reduxData";

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const updatedPayload = { fileData: action.payload, count: 0 };
      return [...state, updatedPayload];
    default:
      return state;
  }
};
