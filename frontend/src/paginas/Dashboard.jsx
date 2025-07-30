import React from "react";
import DashboardStats from '../componentes/DashboardStats';

const Dashboard = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Dashboard</h1>
      <p className="text-gray-600 mb-8">Estadísticas generales del sistema y actividad reciente.</p>
      <DashboardStats />
    </div>
  </div>
);

export default Dashboard;
