import React, { useState } from "react";
import { calcularTotal } from "../helpers";

const Formulario = (props) => {
  const { setCantidad, cantidad, plazo, setPlazo, total, setTotal } = props;
  // definir state

  const [error, setError] = useState(false);

  // Definir el state
  const calcularPrestamo = (e) => {
    e.preventDefault();
    // Validar formulario
    if (cantidad === 0 || plazo === "") {
      setError(true);
      return;
    }
    // Eliminar error
    setError(false);
    // Realizar la cotización

    const total = calcularTotal(cantidad, plazo);

    // Guardar total
    setTotal(total);
  };
  return (
    <>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={(e) => {
                setCantidad(parseInt(e.target.value));
              }}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={(e) => {
                setPlazo(parseInt(e.target.value));
              }}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {error ? (
        <p className="error">Todos los campos son obligatorios</p>
      ) : null}
    </>
  );
};

export default Formulario;
