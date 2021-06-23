import { ADD_PRODUCT, GET_PRODUCTS, SEARCH_PRODUCTS } from "../actionTypes";

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload: payload,
});

export const getProducts = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});

export const getSearchValue = (payload) => ({
  type: SEARCH_PRODUCTS,
  payload,
});
