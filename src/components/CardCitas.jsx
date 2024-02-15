import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./cardCitas.css";

const CardCitas = ({ cita, onDelete, fetchData }) => {
  const { id, nombre, fecha, hora } = cita;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blurBackground, setBlurBackground] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://127.0.0.1:5000/delete/${id}`);
      toast.success(response.data.message);
      onDelete(id);
      closeModal();
      fetchData(); // Llama a fetchData después de eliminar la cita
    } catch (error) {
      fetchData();
    }
  };

  return (
    <>
      <div className={`card ${blurBackground ? "blurred" : ""}`} onClick={openModal}>
        <h3>Cita #{id}</h3>
        <p>Nombre: {nombre}</p>
        <p>Fecha: {fecha}</p>
        <p>Hora: {hora}</p>
      </div>

      {isModalOpen && (

        <div className="cardCitasModal">
          <div className="cardCitasModalContenedor">
            <p>Nombre: {nombre}</p>
            <p>Fecha: {fecha}</p>
            <p>Hora: {hora}</p>
          </div>
          <div className="cardCitasModalButon">
            <button  className="cardCitasModalButonDelete" onClick={handleDelete}>Eliminar Cita</button>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>

      )}

      {isModalOpen && (
        <div className="cardBlur">

        </div>
      )}

      {blurBackground && <div className="backgroundOverlay" />}
    </>
  );
};

export default CardCitas;
