import React, { useState } from "react";
import FormularioReserva from "./FormularioReserva";

const HotelCard = ({ hotel }) => {
  const [showReservaForm, setShowReservaForm] = useState(false);

  const handleReservar = (reserva) => {
    // Aquí manejaremos la lógica de reserva
    console.log('Nueva reserva:', reserva);
    setShowReservaForm(false);
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <img
  src={
    hotel.imagen && hotel.imagen.trim() !== ''
      ? hotel.imagen
      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotel_icon_1.png/480px-Hotel_icon_1.png'
  }
  alt={hotel.nombre}
  className="h-40 w-full object-cover"
  onError={(e) => {
    e.target.src =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotel_icon_1.png/480px-Hotel_icon_1.png';
  }}
/>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="font-bold text-lg text-gray-800">{hotel.nombre}</h3>
        <p className="text-gray-500 text-sm mb-2">{hotel.ubicacion}</p>
        <span className="text-xs text-gray-400 mb-2">{hotel.descripcion}</span>
        {hotel.precio && (
          <span className="text-sm text-blue-600 font-bold mb-4">
            Desde ${hotel.precio} MXN
          </span>
        )}
        <button
          onClick={() => setShowReservaForm(true)}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
        >
          Reservar Ahora
        </button>
      </div>

      {showReservaForm && (
        <FormularioReserva
          hotel={hotel}
          onReservar={handleReservar}
          onClose={() => setShowReservaForm(false)}
        />
      )}
    </div>
  );
};

export default HotelCard;
