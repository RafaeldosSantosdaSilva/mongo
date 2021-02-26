import React from "react";
import { useSelector } from "react-redux";

const Categories = () => {
  const products = useSelector((state) =>
    state.products.map(({ categoria }) => categoria)
  );

  const unique = [...new Set(products)];

  return (
    <div className="categories">
      <h3>Categorias</h3>
      <button className="categoriesButtons">Todos</button>
      {unique &&
        unique.map((item) => (
          <button key={item} className="categoriesButtons">
            {item}
          </button>
        ))}
    </div>
  );
};

export default Categories;
