import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const allProducts = createAction('ALL_PRODUCTS');

export default createReducer(INITIAL_STATE, {
  [allProducts.type]: (state, action) => [ ...action.payload ]
});


