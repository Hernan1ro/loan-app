import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  const [cantidad, setCantidad] = useState(0);

  return (
    <>
      <Header titulo="Cotizador de Prestamo" />
      <div className="container">
        <Formulario cantidad={cantidad} setCantidad={setCantidad} />
      </div>
    </>
  );
}

export default App;
