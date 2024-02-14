import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardCitas from "../components/CardCitas";

import "./misCitas.css"

const MisCitas = () => {
  const [citas, setCitas] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000");
      setCitas(response.data.citas);

      // Mostrar un modal en Toastify indicando que las citas se obtuvieron exitosamente
      toast.success("Citas obtenidas exitosamente", {
        position: "top-center",
        autoClose: 3000, // Cerrar automáticamente después de 3 segundos
        hideProgressBar: true,
      });
    } catch (error) {
      console.error("Error al obtener las citas:", error);
      // Mostrar un modal en Toastify indicando que hubo un error al obtener las citas
      toast.error("Error al obtener las citas", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <>
      <Header />
      <div className="misCitas">
        <button className="misCitasButton" onClick={fetchData}>Obtener Citas</button>

        <div className="misCitas">
          {citas.map((cita) => (
            <CardCitas key={cita.id} cita={cita} fetchData={fetchData} />
          ))}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default MisCitas;
