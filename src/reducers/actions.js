export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PROPERTIES = "UPDATE_PROPERTIES";
export const INCREMENT_COUNT_SINGLE_PRODUCT = "INCREMENT_COUNT_SINGLE_PRODUCT";
export const DECREMENT_COUNT_SINGLE_PRODUCT = "DECREMENT_COUNT_SINGLE_PRODUCT";
export const INCREMENT_COUNT_PRODUCTS = "INCREMENT_COUNT_PRODUCTS";
export const DECREMENT_COUNT_PRODUCTS = "DECREMENT_COUNT_PRODUCTS";
export const CALCULATE_TOTAL_COUNT = "CALCULATE_TOTAL_COUNT";
export const UPDATE_CART = "UPDATE_CART";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// cart updates
export const REMOVE_SINGLE_FILE_FROM_CART = "REMOVE_SINGLE_FILE_FROM_CART";
export const INCREMENT_SINGLE_FILE_FROM_CART = "INCREMENT_SINGLE_FILE_FROM_CART";
export const DECREMENT_SINGLE_FILE_FROM_CART = "DECREMENT_SINGLE_FILE_FROM_CART";
export const INCREMENT_ALL_FILES_FROM_CART = "INCREMENT_ALL_FILES_FROM_CART";
export const DECREMENT_ALL_FILES_FROM_CART = "DECREMENT_SINGLE_FILE_FROM_CART";
export const UPLOAD_TO_CART = "UPLOAD_TO_CART";


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

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    payload: productId,
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

export const updateCart = (products) => {
  return {
    type: UPDATE_CART,
    payload: products,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

