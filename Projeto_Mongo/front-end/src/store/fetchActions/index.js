import { allProducts } from "../products";

export const getAllProducts = () => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:3333/products')
    const result = await response.json()
    dispatch(allProducts(result))
  }
  
}