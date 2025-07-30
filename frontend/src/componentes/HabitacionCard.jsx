import React from "react";

const HabitacionCard = ({ habitacion }) => (
  <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
    <div className="p-4 flex-1 flex flex-col justify-between">
      <h3 className="font-bold text-lg text-gray-800">Habitación {habitacion.numero}</h3>
      <p className="text-gray-500 text-sm mb-2">Tipo: {habitacion.tipo}</p>
      <span className="text-xs text-gray-400">{habitacion.descripcion}</span>
      <span className="text-xs text-blue-600 font-bold">${habitacion.precio_noche} / noche</span>
    </div>
  </div>
);

export default HabitacionCard;
