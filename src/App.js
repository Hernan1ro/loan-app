import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Header titulo="Cotizador de Prestamo" />
      <div className="container">
        <Formulario />
      </div>
    </>
  );
}

export default App;
