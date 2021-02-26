import React from "react";
import Categories from "../components/Categories";
import Produto from "../components/Produto";

import { addItem } from '../store/cart';
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../store/fetchActions";
import { showMessage, hideMessage } from '../store/layout'

import "../style/products.css";

const Produtos = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  function addCart(product) {
    dispatch(addItem(product))
    dispatch(showMessage())
    setTimeout(() => { dispatch(hideMessage()) }, 2000)
  }


  return (
    <div className="productContainer">
      <Categories />

      <section className="productSection">
        {products &&
          products.map((product, index) => (
            <Produto key={index} product={product} className="productCards" addCart={addCart} />
          ))}
      </section>
    </div>
  );
};

export default Produtos;
