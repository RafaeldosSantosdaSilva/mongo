import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { removeItem } from '../store/cart'

import "../style/cart.css";

const Cart = () => {
  const deactivatingCart = (e) => {
    const cartContainer = document.querySelector(".cartContainer").className;
    const removeClass =
      cartContainer === "cartContainer showing"
        ? "cartContainer"
        : "cartContainer showing";
    if (e.target.classList.value === "cartContainer showing") {
      document.querySelector(".cartContainer").className = removeClass;
    }
  };

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart)

  function removeCart(id) {
    dispatch(removeItem(id))
  }

  return (
    <aside
      className="cartContainer"
      id="cartContainer"
      onClick={deactivatingCart}
    >
      {cart.length === 0 ? (
          <div className="cart">
            <h3>Sem produtos no carrinho</h3>
          </div>
          
        )
      :(
        <div className="cart">
        <h3>Seu carrinho de compras</h3>
        <div className="items">
          {cart &&
            cart.map(({ id_produto, descricao, preco_novo, qtt }) => (
              <div key={id_produto} className="item">
                <p>
                  <span>{descricao}</span>
                </p>
                <p>
                  Valor:{" "}
                  <span>
                    {(preco_novo).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </p>
                <p className="qtt">
                  Quantidade: {qtt}{" "}
                  <button className="btMinus"
                    onClick={() => removeCart(id_produto)}
                  >
                    -
                  </button>
                  <button className="btMore"
                   
                  >
                    +
                  </button>
                </p>
              </div>
            ))}

          {/* <h3 className="totalPrice">Total: {totalPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}</h3> */}

          <div className="buttons">
            <button className="cartButton clean"
            >
              Limpar
            </button>
            
            <button
              className="cartButton  checkout"
              onClick={() => alert("Em breve")}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
        )
      }

    </aside>
  );
};

export default Cart;
