import React from "react";
import Produto from "../components/Produto";

import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from '../store/fetchActions'
import { addItem } from '../store/cart';
import { showMessage, hideMessage } from '../store/layout'

import '../style/main.css';

const Home = () => {
  const products = useSelector((state) => state.products.map(
    (product, index) => (
      <Produto key={index} product={product} className="offerCards" addCart={addCart}/>
    )
  ))
  const offerProduct = products[10]
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch]);

  function addCart(product) {
    dispatch(addItem(product))
    dispatch(showMessage())
    setTimeout(() => { dispatch(hideMessage()) }, 2000)
  }

  return (
    <main>
      <h2 className="welcomeTitle">
        Bem vindo, a <span>Eletro Dev Store!</span>
      </h2>

      <section className="offerSection">
        {offerProduct}
      </section>
    </main>
  );
};

export default Home;
