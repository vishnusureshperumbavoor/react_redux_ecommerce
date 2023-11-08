export const ADD_PRODUCT = "ADD_PRODUCT";
export const INCREMENT_COUNT_SINGLE_PRODUCTS = "INCREMENT_COUNT_SINGLE_PRODUCTS";
export const DECREMENT_COUNT_SINGLE_PRODUCTS = "DECREMENT_COUNT_SINGLE_PRODUCTS";
export const INCREMENT_COUNT_PRODUCTS = "INCREMENT_COUNT_PRODUCTS";
export const DECREMENT_COUNT_PRODUCTS = "DECREMENT_COUNT_PRODUCTS";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const incrementCountSingleProducts = (products) => {
  return {
    type: INCREMENT_COUNT_PRODUCTS,
    payload: products
  };
};

export const decrementCountSingleProducts = (products) => {
  return {
    type: DECREMENT_COUNT_PRODUCTS,
    payload: products,
  };
};

export const incrementCountProducts = () => {
  return {
    type: INCREMENT_COUNT_PRODUCTS
  };
};

export const decrementCountProducts = () => {
  return {
    type: DECREMENT_COUNT_PRODUCTS
  };
};
