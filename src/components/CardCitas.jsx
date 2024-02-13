import React from "react";

import "./cardCitas.css"

const CardCitas = ({ cita }) => {
  const { id, nombre, fecha, hora } = cita;

  return (
    <div className="card">
      <h3>Cita #{id}</h3>
      <p>Nombre: {nombre}</p>
      <p>Fecha: {fecha}</p>
      <p>Hora: {hora}</p>
    </div>
  );
};

export default CardCitas;
