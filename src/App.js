import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);

  return (
    <>
      <Header titulo="Cotizador de Prestamo" />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          total={total}
          setTotal={setTotal}
        />
        <p>Total a pagar: ${total}</p>
      </div>
    </>
  );
}

export default App;
