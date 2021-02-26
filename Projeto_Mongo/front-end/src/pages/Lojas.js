import React from "react";

import '../style/main.css'

const Lojas = () => {
  return (
    <main>
        <section className="stores">
            <div className="storeCards">
                <img src="../images/lojas/edificio-central.jpg" alt="Edificio central" />
                <h3>Edifício Avenida Central - RJ</h3>
                <p>Av Rio Branco, 156</p>
                <p>1º andar</p>
                <p>Centro</p>
                <p>(21) 3322-2233</p>
            </div>
            <div className="storeCards">
                <img src="../images/lojas/barra-shopping.jpg" alt="Barra Shopping" />
                <h3>Barra Shopping - RJ</h3>
                <p>Av das Americas, 3255</p>
                <p>Bloco B1</p>
                <p>Barra da Tijuca</p>
                <p>(21) 3333-3333</p>
            </div>
            <div className="storeCards">
                <img src="../images/lojas/madureira-shopping.jpg" alt="Madureira Shopping" />
                <h3>Madureira Shopping - RJ</h3>
                <p>Estrada do Portela, 222</p>
                <p>2º andar</p>
                <p>Madureira</p>
                <p>(21) 2233-3322</p>
            </div>
        </section>
    </main>

  );
};

export default Lojas;
