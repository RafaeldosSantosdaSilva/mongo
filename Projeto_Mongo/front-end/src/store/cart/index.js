import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const addItem = createAction("ADD_CART");
export const removeItem = createAction("REMOVE_CART");

export default createReducer(
  INITIAL_STATE, {
    [addItem.type]: (state, action) => [...state, action.payload],
    
    [removeItem.type]: (state, action) =>
      state.filter((item) => item.id_produto !== action.payload),
  }
);
