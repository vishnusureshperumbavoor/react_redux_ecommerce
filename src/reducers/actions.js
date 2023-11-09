export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PROPERTIES = "UPDATE_PROPERTIES";
export const INCREMENT_COUNT_SINGLE_PRODUCT = "INCREMENT_COUNT_SINGLE_PRODUCT";
export const DECREMENT_COUNT_SINGLE_PRODUCT = "DECREMENT_COUNT_SINGLE_PRODUCT";
export const INCREMENT_COUNT_PRODUCTS = "INCREMENT_COUNT_PRODUCTS";
export const DECREMENT_COUNT_PRODUCTS = "DECREMENT_COUNT_PRODUCTS";
export const CALCULATE_TOTAL_COUNT = "CALCULATE_TOTAL_COUNT";

export const updateProperties = (data) => {
  return {
    type: UPDATE_PROPERTIES,
    payload: data,
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const incrementCountSingleProduct = (productId) => {
  return {
    type: INCREMENT_COUNT_SINGLE_PRODUCT,
    payload: productId,
  };
};

export const decrementCountSingleProduct = (productId) => {
  return {
    type: DECREMENT_COUNT_SINGLE_PRODUCT,
    payload: productId,
  };
};

export const incrementCountProducts = () => {
  return {
    type: INCREMENT_COUNT_PRODUCTS,
  };
};

export const decrementCountProducts = () => {
  return {
    type: DECREMENT_COUNT_PRODUCTS,
  };
};

export const calculateTotalCount = () => {
  return {
    type: CALCULATE_TOTAL_COUNT,
  };
};
