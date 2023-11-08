export const ADD_POST = "ADD_POST";
export const INCREMENT_COUNT_SINGLE_POST = "INCREMENT_COUNT_SINGLE_POST";
export const DECREMENT_COUNT_SINGLE_POST = "DECREMENT_COUNT_SINGLE_POST";
export const INCREMENT_COUNT_POSTS = "INCREMENT_COUNT_POSTS";
export const DECREMENT_COUNT_POSTS = "DECREMENT_COUNT_POSTS";

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

export const incrementCountSinglePost = (post) => {
  return {
    type: INCREMENT_COUNT_POSTS,
    payload: post,
  };
};

export const decrementCountSinglePost = (post) => {
  return {
    type: DECREMENT_COUNT_POSTS,
    payload: post,
  };
};

export const incrementCountPosts = (posts) => {
  return {
    type: INCREMENT_COUNT_POSTS,
    payload: posts,
  };
};

export const decrementCountPosts = (posts) => {
  return {
    type: DECREMENT_COUNT_POSTS,
    payload: posts,
  };
};
