import React from "react";

const HotelCard = ({ hotel }) => (
  <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
    <img src={hotel.imagen} alt={hotel.nombre} className="h-40 w-full object-cover" />
    <div className="p-4 flex-1 flex flex-col justify-between">
      <h3 className="font-bold text-lg text-gray-800">{hotel.nombre}</h3>
      <p className="text-gray-500 text-sm mb-2">{hotel.ubicacion}</p>
      <span className="text-xs text-gray-400">{hotel.descripcion}</span>
    </div>
  </div>
);

export default HotelCard;
