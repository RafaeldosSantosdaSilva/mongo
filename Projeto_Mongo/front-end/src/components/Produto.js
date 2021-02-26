import React from "react";
import ModalImage from "react-modal-image";

const Produto = ({ product, className, addCart }) => {
  return (
    <div className={className}>
      <ModalImage
        className="image"
        small={product.imagem}
        large={product.imagem}
        alt={product.imagem}
      />

      <h3>{product.descricao}</h3>
      <p className="oldPrice">
        {product.preco_antigo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <p className="newPrice">
        {product.preco_novo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <button
       onClick={() => addCart(product)}
      >
        <i className="fas fa-shopping-basket"></i>Comprar
      </button>
    </div>
  );
};

export default Produto;
