import React from "react";

const DashboardStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Ejemplo de estadística */}
    <div className="bg-blue-100 rounded-xl p-6 text-center shadow">
      <h2 className="text-2xl font-bold text-blue-700">120</h2>
      <p className="text-gray-700">Reservas</p>
    </div>
    <div className="bg-green-100 rounded-xl p-6 text-center shadow">
      <h2 className="text-2xl font-bold text-green-700">15</h2>
      <p className="text-gray-700">Hoteles</p>
    </div>
    <div className="bg-yellow-100 rounded-xl p-6 text-center shadow">
      <h2 className="text-2xl font-bold text-yellow-700">32</h2>
      <p className="text-gray-700">Habitaciones</p>
    </div>
    <div className="bg-pink-100 rounded-xl p-6 text-center shadow">
      <h2 className="text-2xl font-bold text-pink-700">8</h2>
      <p className="text-gray-700">Empleados</p>
    </div>
  </div>
);

export default DashboardStats;
