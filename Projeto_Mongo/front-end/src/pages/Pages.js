import React from "react";
import { Routes, Route } from "react-router-dom";
import Contato from "../pages/Contato";
import NotFound from "../pages/NotFound";

import '../style/loading.css';

const Home = React.lazy(() => import("../pages/Home"));
const Produtos = React.lazy(() => import("../pages/Produtos"));
const Lojas = React.lazy(() => import("../pages/Lojas"));

function loading() {
  return (
    <>
      <h3 style={{marginBottom: '-1rem'}}>Carregando</h3>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

const Pages = () => {
  return (
    <Routes>
      <React.Suspense fallback={loading()}>
        <Route path="/" element={<Home />} />
      </React.Suspense>
      <React.Suspense fallback={loading()}>
        <Route path="produtos" element={<Produtos />} />
      </React.Suspense>
      <React.Suspense fallback={loading()}>
        <Route path="lojas" element={<Lojas />} />
      </React.Suspense>
      <Route path="contato" element={<Contato />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Pages;
