import React from "react";

const Reservas = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Mis Reservas</h1>
      <div className="space-y-6">
        <div className="bg-blue-50 rounded-lg p-4 shadow">
          <div className="font-bold text-blue-700">Hotel El Dorado</div>
          <div className="text-gray-600">Habitación 101 - Suite</div>
          <div className="text-gray-500 text-sm">
            Del 20/07/2025 al 22/07/2025
          </div>
          <div className="text-green-600 font-semibold">Confirmada</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 shadow">
          <div className="font-bold text-blue-700">Hotel Esmeralda</div>
          <div className="text-gray-600">Habitación 102 - Doble</div>
          <div className="text-gray-500 text-sm">
            Del 01/08/2025 al 05/08/2025
          </div>
          <div className="text-yellow-600 font-semibold">Pendiente</div>
        </div>
      </div>
    </div>
  </div>
);

export default Reservas;
