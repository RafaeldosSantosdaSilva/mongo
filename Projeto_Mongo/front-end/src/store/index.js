import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './products'
import layoutReducer from './layout';
import cartReducer from './cart'

export default configureStore({
  reducer: {
    products: productsReducer,
    layout: layoutReducer,
    cart: cartReducer,
  }
});