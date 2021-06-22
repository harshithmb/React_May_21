import * as actionTypes from "../actionTypes";

const initialState = {
  products: [{ name: "Hello" }],
  cart: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_PRODUCT:
      return { ...state, cart: [...state.cart, payload] };
    case actionTypes.GET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
