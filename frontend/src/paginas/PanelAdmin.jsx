import React from "react";

const PanelAdmin = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Panel Administrativo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 rounded-lg p-6 shadow">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Gestión de Hoteles</h2>
          <p className="text-gray-600">Agrega, edita o elimina hoteles.</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 shadow">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Gestión de Habitaciones</h2>
          <p className="text-gray-600">Administra las habitaciones de cada hotel.</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 shadow">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Gestión de Reservas</h2>
          <p className="text-gray-600">Consulta y gestiona las reservas de los clientes.</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 shadow">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Gestión de Empleados</h2>
          <p className="text-gray-600">Administra los empleados y sus roles.</p>
        </div>
      </div>
    </div>
  </div>
);

export default PanelAdmin;
