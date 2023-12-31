import {
  ADD_PRODUCT,
  INCREMENT_COUNT_PRODUCTS,
  INCREMENT_COUNT_SINGLE_PRODUCT,
  DECREMENT_COUNT_PRODUCTS,
  DECREMENT_COUNT_SINGLE_PRODUCT,
  CALCULATE_TOTAL_COUNT,
  UPDATE_PROPERTIES,
  UPDATE_CART,
  DELETE_PRODUCT,
  REMOVE_FROM_CART,
} from "./actions";
import { initialState } from "../data/reduxData";

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const updatedPayload = {
        id: Math.floor(Date.now()),
        fileData: action.payload,
        count: 1,
      };
      return { ...state, products: [...state.products, updatedPayload] };
    case INCREMENT_COUNT_PRODUCTS:
      const incrementCountOfProducts = state.products.map((product) => ({
        ...product,
        count: product.count + 1,
      }));
      return { ...state, products: incrementCountOfProducts };
    case DECREMENT_COUNT_PRODUCTS:
      const decrementCountOfProducts = state.products.map((product) => ({
        ...product,
        count: Math.max(0, product.count - 1),
      }));
      return { ...state, products: decrementCountOfProducts };
    case INCREMENT_COUNT_SINGLE_PRODUCT:
      console.log(action.payload);
      const incrementingCountOfSingleProduct = state.products.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            count: product.count + 1,
          };
        }
        return product;
      });
      return { ...state, products: incrementingCountOfSingleProduct };
    case DECREMENT_COUNT_SINGLE_PRODUCT:
      const decrementingCountOfSingleProduct = state.products.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            count: Math.max(0, product.count - 1),
          };
        }
        return product;
      });
      return { ...state, products: decrementingCountOfSingleProduct };
    case DELETE_PRODUCT:
      const updatedFiles = state.products.filter(
        (product) => product.id !== action.payload
      );
      return { ...state, products: updatedFiles };
    case CALCULATE_TOTAL_COUNT:
      const totalCount = state.products.reduce(
        (sum, product) => sum + product.count,
        0
      );
      return { ...state, totalCount };
    default:
      return state;
  }
};

export const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROPERTIES:
      return {
        ...state,
        properties: { ...state.properties, ...action.payload },
      };
    default:
      return state;
  }
};

export const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
