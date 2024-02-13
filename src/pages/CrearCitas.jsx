import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./crearCitas.css"

const CrearCitas = () => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/created",
        {
          nombre: nombre,
          fecha: fecha,
          hora: hora,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(response.data.message);
    } catch (error) {
      
      toast.error("Error al crear la cita.");
      console.error("Error al crear la cita:", error);
    }
  };

  return (
    <>
      <Header />
      <h1>Ingresa los datos para agendar la cita</h1>
      <div className="formulario">
        <form onSubmit={handleFormSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <label>
            Fecha:
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </label>
          <label>
            Hora:
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </label>
          <button type="submit">Crear Cita</button>
        </form>
      </div>
    </>
  );
};

export default CrearCitas;
