import React from "react";
import HabitacionCard from '../componentes/HabitacionCard';

const hotelEjemplo = {
  nombre: "El Dorado",
  ubicacion: "Hermosillo",
  descripcion: "Hotel de lujo con vista al mar.",
  imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
};

const habitacionesEjemplo = [
  {
    numero: "101",
    tipo: "Suite",
    descripcion: "Vista al mar, cama king size.",
    precio_noche: 2500
  },
  {
    numero: "102",
    tipo: "Doble",
    descripcion: "Dos camas matrimoniales, balcón.",
    precio_noche: 1800
  }
];

const HotelDetalle = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
        <img src={hotelEjemplo.imagen} alt={hotelEjemplo.nombre} className="rounded-xl w-full max-w-xs shadow" />
        <div>
          <h1 className="text-3xl font-bold text-blue-700 mb-2">{hotelEjemplo.nombre}</h1>
          <p className="text-gray-600 mb-2">{hotelEjemplo.ubicacion}</p>
          <p className="text-gray-700">{hotelEjemplo.descripcion}</p>
        </div>
      </div>
      <h2 className="text-xl font-bold text-blue-700 mb-4">Habitaciones disponibles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {habitacionesEjemplo.map((habitacion, idx) => (
          <HabitacionCard key={idx} habitacion={habitacion} />
        ))}
      </div>
    </div>
  </div>
);

export default HotelDetalle;
