import React from "react";
import "../style/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="payContainer">
        <h3>Formas de pagamento</h3>
        <img src="./images/formas_pagamento.png" alt="formas de pagamento" />
      </div>
      
      <div className="mediaContainer">
        <h3>Redes Sociais</h3>
        <a href="https://facebook.com">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="footerAutor">Marcos Antonio &reg; Recode Pro 2020</p>
    </footer>
  );
};

export default Footer;
