import { ADD_PRODUCT, GET_PRODUCTS } from "../actionTypes";

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload: payload,
});

export const getProducts = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});
